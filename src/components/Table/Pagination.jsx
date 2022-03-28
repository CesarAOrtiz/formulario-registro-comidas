import LeftRow from "../../icons/LeftRow";
import RightRow from "../../icons/RightRow";
import DoubleLeft from "../../icons/DoubleLeft";
import DoubleRight from "../../icons/DoubleRight";

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={`relative inline-flex items-center px-2 py-2 w-10 h-10  text-blue-700  rounded-full transition-colors duration-150 focus:shadow-outline hover:bg-blue-100 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default function Pagination({ className, pagination, ...props }) {
  return (
    <div
      className={`bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 ${className}`}
      {...props}
    >
      <nav className="flex flex-1 items-center justify-between flex-col lg:flex-row">
        <p className="text-md text-gray-600 md:pb-2">
          <span className="font-medium">{` ${pagination.start} -`}</span>
          <span className="font-medium">{` ${pagination.end} `}</span>
          de
          <span className="font-medium">{` ${pagination.length} `}</span>
          resultados
        </p>
        <div
          className="relative z-0 inline-flex rounded-md"
          aria-label="Pagination"
        >
          <Button onClick={pagination.first}>
            <DoubleLeft />
          </Button>
          <Button onClick={pagination.prev}>
            <LeftRow />
          </Button>
          <button
            aria-current="page"
            className="w-10 h-10 mx-1 pointer-events-none text-white bg-blue-700 rounded-full focus:shadow-outline"
          >
            {pagination.current}
          </button>
          <Button onClick={pagination.next}>
            <RightRow />
          </Button>
          <Button onClick={pagination.last}>
            <DoubleRight />
          </Button>
        </div>
      </nav>
    </div>
  );
}
