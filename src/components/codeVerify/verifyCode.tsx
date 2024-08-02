import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CounterDisplay from "../counterDisplay/counterDisplay";
import { convertNumsToPer } from "../../utils/common";
import { LoginContextType } from "../../types/login";
import { LoginContext } from "../../context/login";
import { LoginSteps } from "../../constants/login";
import classes from "./style.module.scss";

const VerifyCode: React.FC = () => {
  const { phoneNumber, setStep } = useContext(LoginContext) as LoginContextType;
  const phone = phoneNumber.replace(/[0-9]/g, convertNumsToPer);

  return (
    <>
      <div className={classes.container}>
        <p>کد تایید را وارد کنید</p>
        <p>{`کد تایید برای شماره ${phone} پیامک شد`}</p>
        <Link to="/" onClick={() => setStep(LoginSteps.PHONE_NUMBER)}>
          تغییر شماره همراه
        </Link>
      </div>
      <CounterDisplay />
    </>
  );
};

export default VerifyCode;
