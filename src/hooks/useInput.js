import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function handleBlur() {
    setDidEdit(true);
  }

  function handleChange(e) {
    setEnteredValue(e.target.value);
    setDidEdit(false);
  }

  return {
    hasError: didEdit && !valueIsValid,
    value: enteredValue,
    handleBlur,
    handleChange,
  };
}
