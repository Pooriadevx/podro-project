import { KeyboardEvent } from "react";

export type useCodeInputType = (n?: number) => {
  otpBoxRefs: HTMLInputElement[];
  handleChange: (target: EventTarget) => void;
  handleBackspace: (e: KeyboardEvent<HTMLElement>) => void;
};