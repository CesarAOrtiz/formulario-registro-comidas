import Search from "../../icons/Search";

export default function SearchInput({ className, ...props }) {
  return (
    <div className="relative">
      <input
        type="search"
        className={`w-full pl-10 pr-4 py-2 rounded-lg shadow text-gray-600 font-medium focus:outline-none focus:shadow-outline ${className}`}
        placeholder="Search..."
        {...props}
      />
      <div className="absolute top-0 left-0 inline-flex items-center p-2">
        <Search className="w-6 h-6  text-gray-500" />
      </div>
    </div>
  );
}
