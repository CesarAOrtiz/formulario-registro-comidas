import { RecordsProvider } from "./contexts/RecordsContext";
import Form from "./components/Form";
import Card from "./components/Card";
import Table from "./components/Table";

function App() {
  return (
    <RecordsProvider>
      <div className="min-h-screen w-full flex jus justify-center items-center bg-gray-100">
        <Card>
          <Table />
        </Card>
        {/* <Card>
          <Form />
        </Card> */}
      </div>
    </RecordsProvider>
  );
}

export default App;
