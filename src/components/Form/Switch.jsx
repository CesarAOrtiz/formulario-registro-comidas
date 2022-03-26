import { useState } from "react";

export default function Switch({
  label,
  name,
  id,
  className,
  onChange,
  checked = false,
  ...props
}) {
  const [state, setState] = useState(checked);
  return (
    <>
      <div className="relative inline-block w-12 mr-2 align-middle select-none">
        <input
          type="checkbox"
          name={name}
          id={id}
          className={`absolute block w-6 h-6 rounded-full bg-white border-gray-300 border-2  appearance-none cursor-pointer checked:border-blue-600 checked:translate-x-6 transition-transform duration-200 ease-in peer ${className}`}
          onChange={(e) => {
            setState(e.target.checked);
            typeof onChange === "function" && onChange(e);
          }}
          checked={state}
          {...props}
        />
        <label
          htmlFor={name || id}
          className="block shadow-md overflow-hidden h-6 rounded-full bg-gray-200 cursor-pointer peer-checked:bg-blue-600"
        ></label>
      </div>
      <label htmlFor={name || id} className="text-sm text-gray-500 mt-1">
        {label}
      </label>
    </>
  );
}
