import { useState } from "react";

function useValue(value) {
  const [inputValue, setInputValue] = useState(value);

  const changeInput = (event) => {
    setInputValue(event.target.value);
  };

  return [inputValue, changeInput];
}

export default useValue;