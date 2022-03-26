import { RecordsProvider } from "./contexts/RecordsContext";
import Form from "./components/Form";
import Card from "./components/Card";
import Table from "./components/Table";
import Header from "./components/Header";

function App() {
  return (
    <RecordsProvider>
      <main className="min-h-screen w-full flex flex-col items-center bg-gray-100">
        <section className="container">
          <Card className="bg-blue-700 text-white text-lg font-bold uppercase !shadow-xl rounded-xl w-full my-10">
            <Header />
          </Card>
          <div className="flex justify-evenly w-full">
            <Card className="bg-white !shadow-xl rounded-xl min-w-[250px] w-[90%] max-w-[380px] max-h-[770px] mr-4">
              <Form />
            </Card>

            <Card className="!p-0 !shadow-xl rounded-xl bg-white overflow-auto max-w-[90%] max-h-[660px]">
              <Table />
            </Card>
          </div>
        </section>
      </main>
    </RecordsProvider>
  );
}

export default App;
