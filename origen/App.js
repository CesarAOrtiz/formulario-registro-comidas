import { RecordsProvider } from "./contexts/RecordsContext";
import Card from "./components/Card";
import Header from "./components/Header";
import CreatePage from "./components/CreatePage";
import EditPage from "./components/EditPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <RecordsProvider>
      <BrowserRouter>
        <main className="min-h-screen w-full pb-10 bg-gray-100 flex flex-col items-center bg-gradient-to-b from-slate-300 to-slate-200">
          <Card className="bg-blue-700 text-white text-lg font-bold uppercase shadow-lg rounded-xl w-full container my-5">
            <Header />
          </Card>

          <section className="flex justify-evenly container flex-col lg:flex-row">
            <Routes>
              <Route path="/" element={<Navigate to="registro" />} />
              <Route path="/registro" element={<CreatePage />} />
              <Route path="/listado" element={<EditPage />} />
            </Routes>
          </section>
        </main>
      </BrowserRouter>
    </RecordsProvider>
  );
}

export default App;
