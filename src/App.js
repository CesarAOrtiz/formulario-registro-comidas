import { RecordsProvider } from "./contexts/RecordsContext";
import Form from "./components/Form";
import Card from "./components/Card";
import Table from "./components/Table";

function App() {
  return (
    <RecordsProvider>
      <div className="min-h-screen w-full flex flex-row justify-evenly items-center bg-gray-100">
        <div className="flex justify-evenly container">
          {/* <Card className="bg-white shadow-xl rounded-xl min-w-[250px] w-[90%] max-w-[380px]">
            <Form />
          </Card> */}

          <Card className="p-0 shadow-xl rounded-xl bg-white overflow-auto max-w-[90%] self-start">
            <Table />
          </Card>
        </div>
      </div>
    </RecordsProvider>
  );
}

export default App;
