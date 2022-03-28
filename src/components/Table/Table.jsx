import TablePagination from "./TablePagination";
import Search from "./Search";
import Switch from "../Form/Switch";
import Delete from "../../icons/Delete";
import Edit from "../../icons/Edit";

import { useRecords } from "../../contexts/RecordsContext";
import usePagination from "../../hooks/usePagination";

import { useState } from "react";

const headers = [
  "Name",
  "Last Name",
  "Phone",
  "Email",
  "Age",
  "Address",
  "Obsevations",
  "Delivered",
];

export default function Table({
  className,
  onRowEdit,
  onRowDelete,
  onDelivered,
  ...props
}) {
  const [pageSize, setPageSize] = useState(5);
  const { filteredRecords: records, setFilterValue } = useRecords();
  const { page, ...pagination } = usePagination(records, pageSize);

  return (
    <>
      <div className="bg-blue-700 w-full shadow-lg p-5 sticky top-0 left-0 z-10 flex justify-between">
        <div className="w-full mr-5">
          <Search
            className="flex flex-grow shadow-lg"
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </div>
        <select
          title="pageSize"
          className="py-2 px-4 bg-white shadow-lg rounded-lg cursor-pointer focus:outline-none"
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
      <div className="">
        <table className={`table-fixed ${className || ""}`} {...props}>
          <thead className="">
            <tr className="bg-blue-700 text-white uppercase text-sm">
              {headers.map((header) => (
                <th
                  key={header}
                  className="py-3 px-6 text-left sticky top-[68px] bg-inherit z-10"
                >
                  {header}
                </th>
              ))}

              <th className="py-3 px-6 text-center sticky top-[68px] bg-inherit right-0 z-10">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {page.map((td, i) => {
              const { id, delivered, ...record } = td;
              return (
                <tr
                  key={id}
                  className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100"
                >
                  {Object.keys(record).map((key, i) => {
                    return (
                      <td key={key} className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span className="font-medium">{record[key]}</span>
                        </div>
                      </td>
                    );
                  })}
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                      <Switch
                        id={id}
                        checked={td.delivered}
                        onChange={() => onDelivered(td)}
                      />
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center sticky right-0 bg-inherit">
                    <div className="flex item-center justify-center cursor-pointer">
                      <div className="w-4 mr-3 text-yellow-600 transform hover:text-blue-500 hover:scale-110">
                        <Edit onClick={() => onRowEdit && onRowEdit(td)} />
                      </div>
                      <div className="w-4 mr-3 text-red-600 transform hover:text-blue-500 hover:scale-110">
                        <Delete
                          onClick={() => onRowDelete && onRowDelete(td)}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <TablePagination
        className="sticky bottom-0 left-0"
        pagination={pagination}
      />
    </>
  );
}
