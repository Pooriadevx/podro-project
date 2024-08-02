export type UseTimerType = (timer: number) => {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};
