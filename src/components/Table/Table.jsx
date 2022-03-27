import Footer from "./Footer";
import Switch from "../Form/Switch";
import Search from "../Header/Search";
import Delete from "../../icons/Delete";
import Edit from "../../icons/Edit";
import See from "../../icons/See";

import { useRecords } from "../../contexts/RecordsContext";
import usePagination from "../../hooks/usePagination";

import swal from "sweetalert2";

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

export default function Table({ className, ...props }) {
  const { filteredRecords: records, dispatcher, setFilterValue } = useRecords();
  const { page, ...pagination } = usePagination(records, 5);

  const handleDelete = async (id) => {
    const { isConfirmed } = await swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#1d4ed8",
      confirmButtonText: "Yes, delete it!",
    });
    if (isConfirmed) {
      dispatcher.deleteRecord(id);
      swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  };

  const handleDelivered = (td) => {
    td.toggleDelivered();
    dispatcher.editRecord(td);
    swal.fire("¡Registro actualizado!", "", "success");
  };

  return (
    <>
      <div className="bg-blue-700 shadow-xl p-5 sticky top-0 left-0 z-10">
        <Search onChange={(e) => setFilterValue(e.target.value)} />
      </div>
      <table className={`table-fixed ${className}`} {...props}>
        <thead>
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
        <tbody className="text-gray-600 text-sm font-light overflow-y-scroll h-[100px]">
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
                      checked={delivered}
                      onClick={() => handleDelivered(td)}
                    />
                  </div>
                </td>
                <td className="py-3 px-6 text-center sticky right-0 bg-inherit">
                  <div className="flex item-center justify-center cursor-pointer">
                    <div className="w-4 mr-3 text-green-600 transform hover:text-blue-500 hover:scale-110">
                      <See
                        onClick={() =>
                          dispatcher.addRecord({ ...td, id: Date.now() })
                        }
                      />
                    </div>
                    <div className="w-4 mr-3 text-yellow-600 transform hover:text-blue-500 hover:scale-110">
                      <Edit
                        onClick={() =>
                          dispatcher.editRecord({ ...td, phone: Date.now() })
                        }
                      />
                    </div>
                    <div className="w-4 mr-3 text-red-600 transform hover:text-blue-500 hover:scale-110">
                      <Delete onClick={() => handleDelete(id)} />
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Footer className="sticky bottom-0 left-0" pagination={pagination} />
    </>
  );
}
