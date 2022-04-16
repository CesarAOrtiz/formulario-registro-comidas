import { useField, ErrorMessage } from "formik";
import Input from "./Input";

const inputBase =
  "block py-2 px-2 w-full text-md text-gray-900 bg-gray-400 bg-opacity-20 rounded shadow-md border-0 border-b-2 border-gray-300 appearance-none outline-none focus:ring-0 focus:border-blue-600 peer";
const inputError =
  "text-red-500 border-red-500 bg-red-500 bg-opacity-20 focus:border-red-500";
const labelBase =
  "absolute px-2 text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:scale-75 peer-focus:-translate-y-8";
const labelError = "!text-red-500 peer-focus:text-red-500";

export default function Field({ label, className = "", ...props }) {
  const [field, meta] = useField(props);
  const error = meta.error && meta.touched;

  if (props.type === "checkbox" || props.type === "radio") {
    return (
      <div className="relative z-0 mb-6 w-full">
        <div>
          <div className="mr-2 inline-block">
            <Input {...field} {...props} className />
          </div>
          <label
            htmlFor={props.name || props.id}
            className={`text-sm text-gray-500 mt-1  ${error ? labelError : ""}`}
          >
            {label}
          </label>
        </div>
        <ErrorMessage
          name={props.name}
          component="p"
          className="text-xs text-red-500 px-2"
        />
      </div>
    );
  }

  return (
    <div className="relative z-0 mb-6 w-full">
      <Input
        className={`${inputBase} ${error ? inputError : ""} ${className}`}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={props.name}
        component="p"
        className="text-xs text-red-500 px-2"
      />
      <label
        htmlFor={props.name || props.id}
        className={`${labelBase} ${error ? labelError : ""}`}
      >
        {label}
      </label>
    </div>
  );
}
