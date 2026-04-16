import { useParams, useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function DetalleTarea() {
  const { id } = useParams();
  const { tareas, eliminarTarea, toggleTarea } = useTareas();
  const navigate = useNavigate();

  const tarea = tareas.find(t => t.id === Number(id));

  if (!tarea) {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <p style={{ color: "#718096" }}>Tarea no encontrada.</p>
        <button onClick={() => navigate("/")} style={{ marginTop: "12px", padding: "8px 20px", cursor: "pointer" }}>
          Volver
        </button>
      </div>
    );
  }

  function handleEliminar() {
    if (window.confirm(`¿Eliminar "${tarea.titulo}"?`)) {
      eliminarTarea(tarea.id);
      navigate("/");
    }
  }

  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: "12px",
      padding: "28px",
      boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
    }}>
      <button
        onClick={() => navigate("/")}
        style={{
          background: "none",
          border: "none",
          color: "#2b6cb0",
          cursor: "pointer",
          fontSize: "14px",
          padding: 0,
          marginBottom: "16px",
        }}
      >
        ← Volver a la lista
      </button>

      <h2 style={{
        marginTop: 0,
        textDecoration: tarea.completada ? "line-through" : "none",
        color: tarea.completada ? "#718096" : "#1a202c",
      }}>
        {tarea.titulo}
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
        <div style={{ display: "flex", gap: "8px" }}>
          <span style={{ fontWeight: "bold", color: "#4a5568", minWidth: "80px" }}>Materia:</span>
          <span>{tarea.materia}</span>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <span style={{ fontWeight: "bold", color: "#4a5568", minWidth: "80px" }}>Fecha:</span>
          <span>{tarea.fecha}</span>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <span style={{ fontWeight: "bold", color: "#4a5568", minWidth: "80px" }}>Estado:</span>
          <span style={{
            padding: "2px 12px",
            borderRadius: "12px",
            fontSize: "13px",
            backgroundColor: tarea.completada ? "#38a169" : "#e53e3e",
            color: "#fff",
          }}>
            {tarea.completada ? "Completada" : "Pendiente"}
          </span>
        </div>
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <button
          onClick={() => { toggleTarea(tarea.id); navigate("/"); }}
          style={{
            flex: 1,
            padding: "11px",
            backgroundColor: tarea.completada ? "#e53e3e" : "#38a169",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {tarea.completada ? "Marcar como pendiente" : "Marcar como completada"}
        </button>
        <button
          onClick={handleEliminar}
          style={{
            flex: 1,
            padding: "11px",
            backgroundColor: "#fc8181",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          🗑 Eliminar tarea
        </button>
      </div>
    </div>
  );
}

export default DetalleTarea;