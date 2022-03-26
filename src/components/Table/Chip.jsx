import React from "react";

const variants = {
  danger: "bg-red-200 text-red-600",
  success: "bg-green-200 text-green-600",
  warning: "bg-yellow-200 text-yellow-600",
  default: "bg-gray-200 text-gray-600",
};

export default function Chip({ children, variant, ...props }) {
  return (
    <span
      className={`${
        variants[variant || "default"]
      } py-1 px-3 rounded-full text-xs`}
      {...props}
    >
      {children}
    </span>
  );
}
