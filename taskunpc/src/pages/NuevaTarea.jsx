import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function NuevaTarea() {
  const { agregarTarea } = useTareas();
  const navigate = useNavigate();
  const [form, setForm] = useState({ titulo: "", materia: "", fecha: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.titulo || !form.materia || !form.fecha) return;
    agregarTarea(form);
    navigate("/");
  }

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #cbd5e0",
    fontSize: "15px",
    boxSizing: "border-box",
    marginTop: "6px",
  };

  const labelStyle = {
    display: "block",
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: "16px",
    fontSize: "14px",
  };

  return (
    <div style={{
      backgroundColor: "#fff",
      borderRadius: "12px",
      padding: "28px",
      boxShadow: "0 1px 6px rgba(0,0,0,0.08)",
    }}>
      <h2 style={{ marginTop: 0, color: "#2b6cb0" }}>Nueva tarea</h2>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>
          Título
          <input
            style={inputStyle}
            type="text"
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            placeholder="Ej: Parcial de Cálculo"
            required
          />
        </label>
        <label style={labelStyle}>
          Materia
          <input
            style={inputStyle}
            type="text"
            name="materia"
            value={form.materia}
            onChange={handleChange}
            placeholder="Ej: Matemáticas"
            required
          />
        </label>
        <label style={labelStyle}>
          Fecha límite
          <input
            style={inputStyle}
            type="date"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
            required
          />
        </label>
        <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
          <button
            type="submit"
            style={{
              flex: 1,
              padding: "11px",
              backgroundColor: "#2b6cb0",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Agregar tarea
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            style={{
              flex: 1,
              padding: "11px",
              backgroundColor: "#e2e8f0",
              color: "#2d3748",
              border: "none",
              borderRadius: "8px",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default NuevaTarea;