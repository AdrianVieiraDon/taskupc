import { useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function TareaCard({ id, titulo, materia, fecha, completada }) {
  const { toggleTarea } = useTareas();
  const navigate = useNavigate();

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "12px",
      backgroundColor: completada ? "#f0fff4" : "#fff8f0",
      borderLeft: `4px solid ${completada ? "#38a169" : "#e53e3e"}`,
      opacity: completada ? 0.75 : 1,
      transition: "opacity 0.2s",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "12px",
    }}>
      <div style={{ flex: 1 }}>
        <h3
          onClick={() => navigate(`/tarea/${id}`)}
          style={{
            margin: "0 0 8px 0",
            fontSize: "16px",
            cursor: "pointer",
            textDecoration: completada ? "line-through" : "none",
            color: completada ? "#718096" : "#1a202c",
          }}
        >
          {titulo}
        </h3>
        <p style={{ margin: "4px 0", color: "#555", fontSize: "14px" }}>📚 {materia}</p>
        <p style={{ margin: "4px 0", color: "#555", fontSize: "14px" }}>📅 {fecha}</p>
        <span style={{
          display: "inline-block",
          marginTop: "8px",
          padding: "2px 10px",
          borderRadius: "12px",
          fontSize: "13px",
          backgroundColor: completada ? "#38a169" : "#e53e3e",
          color: "#fff",
        }}>
          {completada ? "Completada" : "Pendiente"}
        </span>
      </div>
      <input
        type="checkbox"
        checked={completada}
        onChange={() => toggleTarea(id)}
        style={{ width: "20px", height: "20px", cursor: "pointer", flexShrink: 0 }}
        title="Marcar como completada"
      />
    </div>
  );
}

export default TareaCard;