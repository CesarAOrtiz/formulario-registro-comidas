import { RecordsProvider } from "./contexts/RecordsContext";
import Card from "./components/Card";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  return (
    <RecordsProvider>
      <main className="min-h-screen w-full bg-gray-100 flex flex-col items-center">
        <section className="container">
          <Card className="bg-blue-700 text-white text-lg font-bold uppercase !shadow-xl rounded-xl w-full my-5">
            <Header className="shadow-xl" />
          </Card>
          <section className="flex justify-evenly w-full">
            <Card className="bg-white shadow-xl rounded-xl min-w-[250px] w-[90%] max-w-[380px] max-h-[770px] mr-4">
              <Form />
            </Card>

            <Card className="p-0 shadow-xl rounded-xl bg-white overflow-auto h-full max-w-[90%] max-h-[660px]">
              <Table />
            </Card>
          </section>
        </section>
      </main>
    </RecordsProvider>
  );
}

export default App;
