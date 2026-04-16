import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import NuevaTarea from "./pages/NuevaTarea";
import DetalleTarea from "./pages/DetalleTarea";
import { useTareas } from "./context/TareasContext";

function App() {
  const { tareas } = useTareas();
  const totalPendientes = tareas.filter(t => !t.completada).length;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f7fafc" }}>
      <Header totalPendientes={totalPendientes} />
      <main style={{ padding: "24px", maxWidth: "700px", margin: "0 auto" }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nueva" element={<NuevaTarea />} />
          <Route path="/tarea/:id" element={<DetalleTarea />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;