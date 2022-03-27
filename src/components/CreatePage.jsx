import Card from "./Card";
import Form from "./Form/Form";

export default function CreatePage() {
  return (
    <Card className="bg-white min-w-[250px] w-full max-w-[1100px] h-full max-h-[770px] mx-auto">
      <Form />
    </Card>
  );
}
