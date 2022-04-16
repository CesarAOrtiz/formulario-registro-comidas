import { useField, ErrorMessage } from "formik";
import Input from "./Input";

const commonFields = [
  "date",
  "datetime-local",
  "email",
  "month",
  "number",
  "password",
  "search",
  "select",
  "tel",
  "text",
  "textarea",
  "time",
  "url",
  "week",
];

const noCommonFields = ["checkbox", "radio", "range"];

const notImplmentedFields = ["color", "file"];

const notSupportedFields = ["button", "image", "hidden", "reset", "submit"];

const inputBase =
  "block py-2 px-2 w-full text-md text-gray-900 bg-gray-400 bg-opacity-20 rounded shadow-md border-0 border-b-2 border-gray-300 outline-none focus:ring-0 focus:border-blue-600 peer";
const inputError =
  "text-red-500 border-red-500 bg-red-500 bg-opacity-20 focus:border-red-500";
const labelBase =
  "absolute px-2 text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:scale-75 peer-focus:-translate-y-8";
const labelError = "!text-red-500 peer-focus:text-red-500";

export default function Field({ label, className = "", ...props }) {
  const [field, meta] = useField(props);
  const error = meta.error && meta.touched;

  if (notSupportedFields.includes(props.type)) {
    throw new Error(
      `Any type of inputs "${notSupportedFields}" is not supported`
    );
  }

  if (props.type === "checkbox") {
    return (
      <div className="relative z-0 mb-6 w-full">
        <div>
          <div className="mr-2 inline-block">
            <Input {...field} {...props} className={className} />
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

  if (props.type === "radio") {
    return (
      <>
        <label
          htmlFor={props.name || props.id}
          className={`text-sm text-gray-500 mt-1 mr-2  ${
            error ? labelError : ""
          }`}
        >
          <Input {...field} {...props} className={className} /> {label}
        </label>
        <ErrorMessage
          name={props.name}
          component="p"
          className="text-xs text-red-500 px-2"
        />
      </>
    );
  }

  if (props.type === "range") {
    return (
      <div className="relative z-0 mb-6 w-full">
        <label
          htmlFor={props.name || props.id}
          className={`text-sm text-gray-500 mt-1  ${error ? labelError : ""}`}
        >
          {label} {field.value}
        </label>
        <Input
          {...field}
          {...props}
          className={`bg-gray-400 bg-opacity-20 shadow-md rounded-lg appearance-none w-full h-3 p-0 focus:outline-none focus:ring-0 border-0 border-b-2 border-gray-300 ${className}`}
        />
        <ErrorMessage
          name={props.name}
          component="p"
          className="text-xs text-red-500 px-2"
        />
      </div>
    );
  }

  if (commonFields.includes(props.type)) {
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

  return (
    <div className="relative z-0 mb-6 w-full">
      <label htmlFor={props.name || props.id}>{label}</label>
      <Input {...field} {...props} className={className} />
      <ErrorMessage
        name={props.name}
        component="p"
        className="text-xs text-red-500 px-2"
      />
    </div>
  );
}
