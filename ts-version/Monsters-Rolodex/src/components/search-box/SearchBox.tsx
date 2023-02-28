import { ChangeEvent, ChangeEventHandler } from "react";
import "./search-box.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>;

  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
