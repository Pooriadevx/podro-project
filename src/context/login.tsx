import React, {
  createContext,
  PropsWithChildren,
  useState,
} from "react";
import { LoginContextType } from "../types/login";
import { LoginSteps } from "../constants/login";

export const LoginContext = createContext<LoginContextType | null>(null);

const LoginProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [step, setStep] = useState<LoginSteps>(LoginSteps.PHONE_NUMBER);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <LoginContext.Provider
      value={{ step, setStep, phoneNumber, setPhoneNumber }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
