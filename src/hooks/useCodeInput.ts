import React, { KeyboardEvent } from "react";
import { CODE_INPUT_DIGITS } from "../constants/common";
import { useCodeInputType } from "../types/codeInput";

export const useCodeInput: useCodeInputType = (digits = CODE_INPUT_DIGITS) => {
  const otpBoxRefs: HTMLInputElement[] = new Array(digits).fill(null);

  const handleChange = (target: EventTarget) => {
    const { value, dataset } = target as HTMLInputElement;
    const index = Number(dataset.index);
    if (value && index < digits - 1) {
      otpBoxRefs[index + 1].focus();
    }
  };

  const handleBackspace = (e: KeyboardEvent<HTMLElement>) => {
    const { dataset } = e.target as HTMLInputElement;
    const index = Number(dataset.index);

    if (e.key === "Backspace") {
      if (otpBoxRefs[index].value) {
        otpBoxRefs[index].value = "";
      } else if (index > 0) {
        otpBoxRefs[index - 1].focus();
      }
    }
  };

  return {
    otpBoxRefs,
    handleChange,
    handleBackspace,
  };
};
