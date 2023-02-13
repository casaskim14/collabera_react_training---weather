import React, { forwardRef } from 'react';
import clsx from 'clsx';

function Select({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  meta,
  className,
  options,
  ...props
}) {
  return (
    <div className="-space-y-px rounded-md shadow-sm">
      <div>
        <label htmlFor={props.id} className="sr-only">
          {props.placeholder}
        </label>
        <select
          id={props.id}
          className={clsx(
            'relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
            {
              [className || '']: !!className,
            },
          )}
          {...field}
          {...props}
        >
          <option value="">{props.placeholder}</option>
          {options.map(x => (
            <option key={x.value} value={x.value}>
              {x.text}
            </option>
          ))}
        </select>
        {touched[field.name] && errors[field.name] && (
          <p className="text-red-500 text-sm font-medium">
            {errors[field.name]}
          </p>
        )}
      </div>
    </div>
  );
}
export default Select;
