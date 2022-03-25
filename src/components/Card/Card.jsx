import React from "react";

export default function Card({ children, className, ...props }) {
  return (
    <div
      className={`block p-6 bg-white rounded-lg border border-gray-200 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
