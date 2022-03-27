import { RecordsProvider } from "./contexts/RecordsContext";
import Card from "./components/Card";
import Header from "./components/Header";
import Form from "./components/Form";
import EditPage from "./components/EditPage";

function App() {
  return (
    <RecordsProvider>
      <main className="min-h-screen w-full bg-gray-100 flex flex-col items-center bg-gradient-to-b from-slate-300 to-slate-200">
        <Card className="bg-blue-700 text-white text-lg font-bold uppercase shadow-lg rounded-xl w-full container my-5">
          <Header />
        </Card>

        <section className="flex justify-evenly container">
          {/* <Card className="bg-white min-w-[250px] w-[90%] max-w-[1100px] h-full max-h-[770px] mr-4">
            <Form />
          </Card> */}
          <EditPage />
        </section>
      </main>
    </RecordsProvider>
  );
}

export default App;
