import React, { FormEvent, RefObject, useContext, useRef } from "react";
import classes from "./style.module.scss";
import search from "../../assets/svg/search.svg";
import searchNormal from "../../assets/svg/search-normal.svg";
import { LocationDataContext } from "../../context/locationData";
import { LocationDataContextType } from "../../types/locationData";

const SearchApiInput: React.FC = () => {
  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  const { handleData } = useContext(
    LocationDataContext
  ) as LocationDataContextType;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      handleData(inputRef.current.value);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={classes.wrapper}
      onClick={() => inputRef.current?.focus()}
    >
      <div className={classes.wrapper_input}>
        <img src={search} />
        <input ref={inputRef} placeholder="جستجو" />
      </div>
      <button type="submit" className={classes.wrapper_buttonSearch}>
        <img src={searchNormal} />
      </button>
    </form>
  );
};

export default SearchApiInput;
