import React, { FormEvent, useContext } from "react";
import { LoginContextType } from "../../types/login";
import { LoginContext } from "../../context/login";
import { LoginSteps } from "../../constants/login";
import classes from "./style.module.scss";

const PhoneNumStep: React.FC = () => {
  const { setPhoneNumber, setStep, phoneNumber } = useContext(
    LoginContext
  ) as LoginContextType;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const input = (e.target as HTMLInputElement).querySelector("input");

    if (input?.value.trim() !== "" && input?.validity.valid) {
      console.log(input.value);
      setStep(LoginSteps.VERIFY_CODE);
      setPhoneNumber(input.value);
    }
  };

  return (
    <>
      <div className={classes.container}>
        <p>به پنل مدیریت تسک پادرو خوش آمدید</p>
        <p>برای ورود، لطفا شماره موبایل خود را وارد کنید</p>
      </div>
      <form className={classes.form} id="form" onSubmit={onSubmit}>
        <input
          name="number"
          className={classes.form_input}
          pattern="^(9|09)\d{9}$"
          maxLength={11}
          defaultValue={phoneNumber}
          placeholder="شماره موبایل"
        />
      </form>
      <button className={classes.button} type="submit" form="form">
        ارسال کد تایید
      </button>
      <div className={classes.signUp}>
        <p>حساب کاربری ندارید؟</p>
        <a href="/">ثبت‌نام</a>
      </div>
    </>
  );
};

export default PhoneNumStep;
