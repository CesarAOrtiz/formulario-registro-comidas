import { RecordsProvider } from "./contexts/RecordsContext";
import Form from "./components/Form";
import Card from "./components/Card";
import Table from "./components/Table";

function App() {
  return (
    <RecordsProvider>
      <div className="min-h-screen w-full flex flex-col items-center bg-gray-100">
        <div className="container">
          <Card className="bg-blue-700 text-white text-lg font-bold uppercase !shadow-xl rounded-xl w-full my-10">
            Brand
          </Card>
          <div className="flex justify-evenly w-full">
            <Card className="bg-white !shadow-xl rounded-xl min-w-[250px] w-[90%] max-w-[380px] max-h-[660px] mr-4">
              <Form />
            </Card>

            <Card className="!p-0 !shadow-xl rounded-xl bg-white overflow-auto max-w-[90%] max-h-[660px]">
              <Table />
            </Card>
          </div>
        </div>
      </div>
    </RecordsProvider>
  );
}

export default App;
