import Switch from "../Form/Switch";
import Delete from "../../icons/Delete";
import Edit from "../../icons/Edit";
import See from "../../icons/See";

import { useRecords } from "../../contexts/RecordsContext";
import Record from "../../models/Record";

export default function Table() {
  const { state: records, dispatcher } = useRecords();
  return (
    <table className="table-auto">
      <thead>
        <tr className="bg-gray-300 text-gray-600 uppercase text-sm">
          <th className="py-3 px-6 text-left">Name</th>
          <th className="py-3 px-6 text-left">Last Name</th>
          <th className="py-3 px-6 text-left">Phone</th>
          <th className="py-3 px-6 text-left">Email</th>
          <th className="py-3 px-6 text-left">Age</th>
          <th className="py-3 px-6 text-left">Address</th>
          <th className="py-3 px-6 text-left">Delivered</th>
          <th className="py-3 px-6 text-left">Observation</th>
          <th className="py-3 px-6 text-center sticky right-[-1px] bg-inherit">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {records.map((td, i) => {
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
                    checked={delivered}
                    onClick={() => {
                      td.toggleDelivered();
                      dispatcher.editRecord(td);
                    }}
                  />
                </div>
              </td>
              <td className="py-3 px-6 text-center sticky right-[-1px] bg-inherit">
                <div className="flex item-center justify-center cursor-pointer">
                  <div className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                    <See onClick={() => console.log(td)} />
                  </div>
                  <div className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                    <Edit onClick={() => console.log(td)} />
                  </div>
                  <div className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                    <Delete onClick={() => console.log(td)} />
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
