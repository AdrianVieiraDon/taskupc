import { useState } from "react";
import { useTareas } from "../context/TareasContext";
import TareaCard from "../components/TareaCard";

const FILTROS = ["Todas", "Pendientes", "Completadas"];

function Inicio() {
  const { tareas } = useTareas();
  const [filtro, setFiltro] = useState("Todas");

  const tareasFiltradas = tareas.filter(t => {
    if (filtro === "Pendientes") return !t.completada;
    if (filtro === "Completadas") return t.completada;
    return true;
  });

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {FILTROS.map(f => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            style={{
              padding: "8px 18px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              fontWeight: filtro === f ? "bold" : "normal",
              backgroundColor: filtro === f ? "#2b6cb0" : "#e2e8f0",
              color: filtro === f ? "#fff" : "#2d3748",
              transition: "all 0.2s",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {tareasFiltradas.length === 0 ? (
        <p style={{ color: "#718096", textAlign: "center", marginTop: "40px" }}>
          No hay tareas en esta categoría.
        </p>
      ) : (
        tareasFiltradas.map(tarea => (
          <TareaCard key={tarea.id} {...tarea} />
        ))
      )}
    </div>
  );
}

export default Inicio;