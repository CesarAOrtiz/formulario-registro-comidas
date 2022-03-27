export default function Input({
  error,
  helperText,
  label,
  className,
  name,
  id,
  innerRef,
  ...props
}) {
  return (
    <>
      <input
        type="text"
        name={name}
        id={id}
        className={`block py-2 px-2 w-full text-md text-gray-900 bg-gray-400 bg-opacity-20 rounded shadow-md border-0 border-b-2 border-gray-300 appearance-none outline-none focus:ring-0 focus:border-blue-600 peer 
                    ${
                      error
                        ? "text-red-500 border-red-500 bg-red-500 bg-opacity-20 focus:border-red-500"
                        : ""
                    } 
                    ${className || ""}`}
        placeholder=" "
        ref={innerRef}
        {...props}
      />
      {error && <p className="text-xs text-red-500 px-2">{helperText}</p>}
      <label
        htmlFor={name || id}
        className={`absolute px-2 text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 
                    ${error ? "text-red-500 peer-focus:text-red-500" : ""}`}
      >
        {label}
      </label>
    </>
  );
}
