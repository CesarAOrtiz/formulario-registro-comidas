import React from "react";

export default function Card({ children, className, ...props }) {
  return <div className={`p-6 shadow-lg ${className}`}>{children}</div>;
}
