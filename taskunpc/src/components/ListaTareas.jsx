import { tareasIniciales } from "../data/tareas";
import TareaCard from "./TareaCard";

function ListaTareas() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      {tareasIniciales.map(tarea => (
        <TareaCard key={tarea.id} {...tarea} />
      ))}
    </div>
  );
}

export default ListaTareas;