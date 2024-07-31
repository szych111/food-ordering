export default function Input({
  label,
  props,
  id,
  changeHandler,
  blurHandler,
  error,
}) {
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} onBlur={blurHandler} onChange={changeHandler} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
