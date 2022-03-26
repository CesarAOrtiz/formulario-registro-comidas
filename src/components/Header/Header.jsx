import Search from "./Search";
import { useRecords } from "../../contexts/RecordsContext";

export default function Header({ className, ...props }) {
  const { setFilterValue } = useRecords();
  return (
    <header {...props}>
      <div className="flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-white">
          <span>Brand</span>
        </a>
        <div className="w-full max-w-md ml-6">
          <Search onChange={(e) => setFilterValue(e.target.value)} />
        </div>
      </div>
    </header>
  );
}
