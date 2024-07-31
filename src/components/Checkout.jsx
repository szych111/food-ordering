import { useState } from "react";
import { useInput } from "../hooks/useInput";
import { isEmail, isNotEmpty, hasReqLength } from "../util/validation";
import Input from "./Input";

export default function Checkout() {
  const {
    hasError: nameHasError,
    value: nameValue,
    handleBlur: handleNameBlur,
    handleChange: handleNameChange,
  } = useInput("", (value) => isNotEmpty(value));
  const {
    hasError: emailHasError,
    value: emailValue,
    handleBlur: handleEmailBlur,
    handleChange: handleEmailChange,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    hasError: streetHasError,
    value: streetValue,
    handleBlur: handleStreetBlur,
    handleChange: handleStreetChange,
  } = useInput("", (value) => isNotEmpty(value));
  const {
    hasError: codeHasError,
    value: codeValue,
    handleBlur: handleCodeBlur,
    handleChange: handleCodeChange,
  } = useInput("", (value) => isNotEmpty(value));
  const {
    hasError: cityHasError,
    value: cityValue,
    handleBlur: handleCityBlur,
    handleChange: handleCityChange,
  } = useInput("", (value) => isNotEmpty(value));

  const [error, setError] = useState(false);
  function handleChange(id) {
    console.log(id);
  }

  function handleBlur(id) {
    console.log(id);
  }

  return (
    <form>
      <Input
        id="name"
        type="text"
        label="Full name"
        value={nameValue}
        blurHandler={handleNameBlur}
        changeHandler={handleNameChange}
        error={nameHasError && "Please enter valid name."}
      />
      <Input
        id="email"
        type="email"
        label="E-mail address"
        value={emailValue}
        blurHandler={handleEmailBlur}
        changeHandler={handleEmailChange}
        error={emailHasError && "Please enter valid email."}
      />
      <Input
        id="street"
        type="text"
        label="street"
        value={streetValue}
        blurHandler={handleStreetBlur}
        changeHandler={handleStreetChange}
        error={streetHasError && "Please enter valid street name."}
      />
      <div className="control-row">
        <Input
          id="postal-code"
          type="text"
          label="Postal code"
          value={codeValue}
          blurHandler={handleCodeBlur}
          changeHandler={handleCodeChange}
          error={codeHasError && "Please enter valid postal code"}
        />
        <Input
          id="city"
          type="text"
          label="City"
          value={cityValue}
          blurHandler={handleCityBlur}
          changeHandler={handleCityChange}
          error={cityHasError && "Please enter valid city name."}
        />
      </div>
    </form>
  );
}
