function TareaCard({ titulo, materia, fecha, completada }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "12px",
      backgroundColor: completada ? "#f0fff4" : "#fff8f0",
      borderLeft: `4px solid ${completada ? "#38a169" : "#e53e3e"}`,
    }}>
      <h3 style={{ margin: "0 0 8px 0", fontSize: "16px" }}>{titulo}</h3>
      <p style={{ margin: "4px 0", color: "#555" }}>📚 {materia}</p>
      <p style={{ margin: "4px 0", color: "#555" }}>📅 {fecha}</p>
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
  );
}

export default TareaCard;