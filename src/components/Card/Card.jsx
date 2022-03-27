import React from "react";

export default function Card({ children, className, ...props }) {
  return (
    <div className={`p-6 shadow-xl rounded-xl ${className}`} {...props}>
      {children}
    </div>
  );
}
