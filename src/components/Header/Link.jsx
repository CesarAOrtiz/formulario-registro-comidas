import { NavLink } from "react-router-dom";

export default function Link({ className, ...props }) {
  return (
    <NavLink
      className={({ isActive }) => {
        const base =
          "bg-blue-700 text-gray-300 hover:text-white px-4 rounded-xl cursor-pointer";
        return isActive
          ? `${base} bg-white !text-blue-700 hover:text-blue-600 ${className}`
          : `${base} ${className}`;
      }}
      {...props}
    />
  );
}
