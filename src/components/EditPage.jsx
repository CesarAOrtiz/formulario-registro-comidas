import { useState } from "react";
import Card from "./Card";
import Table from "./Table";
import EditForm from "./Form/EditForm";

export default function EditPage() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <Card className="bg-white min-w-[250px] w-[90%] max-w-[380px] h-full max-h-[770px] mr-4">
        <EditForm />
      </Card>

      <Card className="bg-white overflow-auto max-w-[90%] h-full max-h-[700px] p-0">
        <Table />
      </Card>
    </>
  );
}
