import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/login";
import { LoginSteps, LoginStepsComponents } from "../../constants/login";
import { LoginContextType } from "../../types/login";
import classes from "./style.module.scss";
import podro from "../../assets/svg/podro.svg";
import backArrow from "../../assets/svg/back-arrow.svg";

const LoginContainer: React.FC = () => {
  const { step, setStep } = useContext(LoginContext) as LoginContextType;
  const Component = LoginStepsComponents[step];

  return (
    <div className={classes.container}>
      <img src={podro} alt="podro" loading="lazy" decoding="async" />
      {step !== LoginSteps.PHONE_NUMBER && (
        <Link to="/" onClick={() => setStep(LoginSteps.PHONE_NUMBER)}>
          <img src={backArrow} alt="backArrow" />
        </Link>
      )}
      <Component />
    </div>
  );
};
export default LoginContainer;
