import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";
import { tareasIniciales } from "./data/tareas";

function App() {
  const totalPendientes = tareasIniciales.filter(t => !t.completada).length;

  return (
    <div>
      <Header totalPendientes={totalPendientes} />
      <main style={{ padding: "24px" }}>
        <ListaTareas />
      </main>
    </div>
  );
}

export default App;