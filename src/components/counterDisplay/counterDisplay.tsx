import React, { FormEvent } from "react";
import { toast } from "react-toastify";
import { RESEND_TIMER, VERIFY_CODE } from "../../constants/common";
import { formatTime } from "../../utils/common";
import { useTimer } from "../../hooks/useTimer";
import { useCodeInput } from "../../hooks/useCodeInput";
import classes from "./style.module.scss";

const CounterDisplay: React.FC = React.memo(() => {
  const { handleBackspace, handleChange, otpBoxRefs } = useCodeInput();

  const { counter, setCounter } = useTimer(RESEND_TIMER);

  const resendCode = () => {
    toast.info(`Code: ${VERIFY_CODE}`);
    setCounter(RESEND_TIMER);
  };

  const handleErrorMessage = (isShow: boolean) => {
    const { dataset } = document.querySelector(
      "[data-show]"
    ) as HTMLSpanElement;
    dataset.show = isShow ? "show" : "hide";
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const code = otpBoxRefs.map((i) => i.value).join("");

    if (counter) {
      if (code === VERIFY_CODE) {
        handleErrorMessage(false);
        toast.success("با موفقیت وارد شدید");
        setTimeout(() => window.location.replace("/location-data"), 3000);
      } else {
        handleErrorMessage(true);
      }
    } else {
      resendCode();
    }
  };

  return (
    <>
      <form
        id="form"
        className={classes.inputs}
        onChange={(e) => handleChange(e.target)}
        onKeyDown={handleBackspace}
        onSubmit={onSubmit}
      >
        {otpBoxRefs.map((_, index) => (
          <input
            className={classes.inputs_item}
            maxLength={1}
            key={index}
            data-index={index}
            pattern="[0-9]*"
            ref={(ref) => ref && (otpBoxRefs[index] = ref)}
          />
        ))}
      </form>
      <div className={classes.counter}>
        <p>کد را دریافت نکرده‌اید؟</p>
        <a
          className={`${classes.resendCode} ${
            !counter && classes.resendCode_active
          }`}
          onClick={resendCode}
        >
          ارسال مجدد
        </a>
      </div>
      <button form="form" className={classes.button} type="submit">
        <span>{formatTime(counter)}</span>
        {counter ? "تایید" : "ارسال مجدد"}
      </button>
      <span className={classes.error} data-show={"hide"}>
        کد وارد شده صحیح نمی باشد
      </span>
    </>
  );
});

export default CounterDisplay;
