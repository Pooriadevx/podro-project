import { LoginSteps } from "../constants/login";

export type LoginContextType = {
  step: LoginSteps;
  setStep: React.Dispatch<React.SetStateAction<LoginSteps>>;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
};
