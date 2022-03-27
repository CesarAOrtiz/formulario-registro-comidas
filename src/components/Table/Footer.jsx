import React from "react";
import LeftRow from "../../icons/LeftRow";
import RightRow from "../../icons/RightRow";
import DoubleLeft from "../../icons/DoubleLeft";
import DoubleRight from "../../icons/DoubleRight";

export default function Footer({ className, pagination, ...props }) {
  return (
    <div
      className={`bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 ${className}`}
      {...props}
    >
      <div className="flex flex-1 items-center justify-between">
        <p className="text-md text-gray-600">
          Showing
          <span className="font-medium">{` ${pagination.start} `}</span>
          to
          <span className="font-medium">{` ${pagination.end} `}</span>
          of
          <span className="font-medium">{` ${pagination.length} `}</span>
          results
        </p>
        <nav
          className="relative z-0 inline-flex rounded-md shadow-md"
          aria-label="Pagination"
        >
          <button
            onClick={pagination.first}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border bg-white text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <DoubleLeft />
          </button>
          <button
            onClick={pagination.prev}
            className="relative inline-flex items-center px-2 py-2 border bg-white text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <LeftRow />
          </button>
          <button
            aria-current="page"
            className="z-10 bg-blue-700 border-y text-white relative inline-flex items-center px-4 py-2 text-sm font-medium"
          >
            {pagination.current}
          </button>
          <button
            onClick={pagination.next}
            className="relative inline-flex items-center px-2 py-2 border bg-white text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <RightRow />
          </button>
          <button
            onClick={pagination.last}
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border bg-white text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <DoubleRight />
          </button>
        </nav>
      </div>
    </div>
  );
}
