import VerifyCode from "../components/codeVerify/verifyCode";
import PhoneNumStep from "../components/phoneNumStep/phoneNumStep";

export enum LoginSteps {
  PHONE_NUMBER,
  VERIFY_CODE,
}

export const LoginStepsComponents: Record<LoginSteps, React.FC> = {
  [LoginSteps.PHONE_NUMBER]: PhoneNumStep,
  [LoginSteps.VERIFY_CODE]: VerifyCode,
};
