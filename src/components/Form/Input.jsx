import React from "react";

const inputBase =
  "block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer";
const inputError = "text-red-500 border-red-500 focus:border-red-500";

const labelBase =
  "absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8";
const labelError = "text-red-500 peer-focus:text-red-500";

export default function Input({
  error,
  helperText,
  label,
  className,
  name,
  id,
  ...props
}) {
  return (
    <>
      <input
        type="text"
        name={name}
        id={id}
        className={`${inputBase} ${error && inputError} ${className}`}
        placeholder=" "
        {...props}
      />
      {error && <p className="text-xs text-red-500">{helperText}</p>}
      <label
        htmlFor={name || id || ""}
        className={`${labelBase} ${error && labelError}`}
      >
        {label}
      </label>
    </>
  );
}
