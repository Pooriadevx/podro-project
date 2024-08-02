import { useEffect, useState } from "react";
import { UseTimerType } from "../types/common";

export const useTimer: UseTimerType = (timer) => {
  const [counter, setCounter] = useState<number>(timer);

  useEffect(() => {
    let id: number | null = null;
    if (counter > 0) {
      id = window.setInterval(() => setCounter((prev) => prev - 1000), 1000);
    }
    return () => {
      id && clearInterval(id);
    };
  }, [counter]);

  return { counter, setCounter };
};
