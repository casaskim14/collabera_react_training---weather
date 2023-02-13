import React from 'react';

function Radio({
  field: { name, value, onChange }, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue, setFieldTouched }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  meta,
  label,
  className,
  options,
  ...props
}) {
  return (
    <fieldset>
      <legend>{label}</legend>
      {options.map(x => (
        <div key={x.value}>
          <input
            type="radio"
            name={name}
            id={x.id}
            checked={value === x.id}
            onChange={() => {
              setFieldValue(name, x.id);
              setFieldTouched(name, true);
            }}
          />
          <label htmlFor={x.id}>{x.text}</label>
        </div>
      ))}
      {touched[name] && errors[name] && (
        <p className="text-red-500 text-sm font-medium">{errors[name]}</p>
      )}
    </fieldset>
  );
}

export default Radio;
