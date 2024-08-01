import { useContext } from "react";
import { useInput } from "../hooks/useInput";
import { CartContext } from "../store/cart-context";
import { isEmail, isNotEmpty } from "../util/validation";
import Input from "./Input";

export default function Checkout({ onClose, onOrderSubmit }) {
  const { items } = useContext(CartContext);
  const {
    hasError: nameHasError,
    value: name,
    handleBlur: handleNameBlur,
    handleChange: handleNameChange,
  } = useInput("", (value) => isNotEmpty(value));
  const {
    hasError: emailHasError,
    value: email,
    handleBlur: handleEmailBlur,
    handleChange: handleEmailChange,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    hasError: streetHasError,
    value: street,
    handleBlur: handleStreetBlur,
    handleChange: handleStreetChange,
  } = useInput("", (value) => isNotEmpty(value));
  const {
    hasError: codeHasError,
    value: code,
    handleBlur: handleCodeBlur,
    handleChange: handleCodeChange,
  } = useInput("", (value) => isNotEmpty(value));
  const {
    hasError: cityHasError,
    value: city,
    handleBlur: handleCityBlur,
    handleChange: handleCityChange,
  } = useInput("", (value) => isNotEmpty(value));

  function handleSubmit(e) {
    e.preventDefault();
    const userData = { name, email, street, code, city };
    console.log({ data: userData, order: items });
    onOrderSubmit();
    onClose();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="name"
        type="text"
        label="Full name"
        value={name}
        blurHandler={handleNameBlur}
        changeHandler={handleNameChange}
        error={nameHasError && "Please enter valid name."}
      />
      <Input
        id="email"
        type="email"
        label="E-mail address"
        value={email}
        blurHandler={handleEmailBlur}
        changeHandler={handleEmailChange}
        error={emailHasError && "Please enter valid email."}
      />
      <Input
        id="street"
        type="text"
        label="street"
        value={street}
        blurHandler={handleStreetBlur}
        changeHandler={handleStreetChange}
        error={streetHasError && "Please enter valid street name."}
      />
      <div className="control-row">
        <Input
          id="postal-code"
          type="text"
          label="Postal code"
          value={code}
          blurHandler={handleCodeBlur}
          changeHandler={handleCodeChange}
          error={codeHasError && "Please enter valid postal code"}
        />
        <Input
          id="city"
          type="text"
          label="City"
          value={city}
          blurHandler={handleCityBlur}
          changeHandler={handleCityChange}
          error={cityHasError && "Please enter valid city name."}
        />
      </div>
      <div className="modal-actions">
        <button type="button" className="text-button" onClick={onClose}>
          Close
        </button>
        <button type="submit" className="button">
          Place the order
        </button>
      </div>
    </form>
  );
}
