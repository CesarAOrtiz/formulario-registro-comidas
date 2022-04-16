const checkboxBase =
  "absolute block w-6 h-6 rounded-full bg-white border-gray-300 border-2 appearance-none cursor-pointer checked:border-blue-600 checked:translate-x-6 transition-transform duration-200 ease-in peer";

export default function Switch({ className, ...props }) {
  return (
    <div className="relative inline-block w-12 align-middle select-none">
      <input className={`${checkboxBase} ${className}`} {...props} />
      <label
        htmlFor={props.name || props.id}
        className="block shadow-md overflow-hidden h-6 rounded-full bg-gray-200 cursor-pointer peer-checked:bg-blue-700"
      ></label>
    </div>
  );
}
