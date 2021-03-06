import { useState } from "react";
import Card from "./Card";
import Table from "./Table";
import EditForm from "./Form/EditForm";

import { useRecords } from "../contexts/RecordsContext";
import swal from "sweetalert2";

export default function EditPage() {
  const { dispatcher } = useRecords();
  const [selected, setSelected] = useState({});

  const handleEdit = (td) => {
    setSelected({ ...td });
  };

  const handleDelivered = (td) => {
    td.toggleDelivered();
    dispatcher.editRecord(td);
    swal.fire("¡Registro actualizado!", "", "success");
  };

  const handleDelete = async ({ id }) => {
    const { isConfirmed } = await swal.fire({
      title: "¿Está seguro?",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#1d4ed8",
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    });
    if (isConfirmed) {
      dispatcher.deleteRecord(id);
      swal.fire(
        "Eliminado",
        "El registro se ha eliminado con éxito",
        "success"
      );
    }
  };

  const handleSubmit = (data) => {
    setSelected({});
    dispatcher.editRecord(data);
  };

  return (
    <div className="lg:flex lg:flex-row-reverse w-full">
      <Card className="bg-white !p-0 overflow-auto h-min max-h-[700px] mx-auto mb-5 ">
        <Table
          onRowEdit={handleEdit}
          onDelivered={handleDelivered}
          onRowDelete={handleDelete}
        />
      </Card>
      <Card className="bg-white w-full h-full max-h-[770px] mx-auto lg:mr-4 lg:min-w-[250px] lg:w-[90%] lg:max-w-[380px] lg:mb-0">
        <EditForm selected={selected} onSubmit={handleSubmit} />
      </Card>
    </div>
  );
}
