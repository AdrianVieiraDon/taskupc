import { useNavigate } from "react-router-dom";

function Header({ totalPendientes }) {
  const navigate = useNavigate();

  return (
    <header style={{
      backgroundColor: "#2b6cb0",
      color: "#fff",
      padding: "16px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <h1
        onClick={() => navigate("/")}
        style={{ margin: 0, fontSize: "22px", cursor: "pointer" }}
      >
        📋 TaskUPC
      </h1>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{
          backgroundColor: "#fff",
          color: "#2b6cb0",
          borderRadius: "20px",
          padding: "4px 14px",
          fontWeight: "bold",
          fontSize: "14px",
        }}>
          {totalPendientes} pendiente{totalPendientes !== 1 ? "s" : ""}
        </span>
        <button
          onClick={() => navigate("/nueva")}
          style={{
            backgroundColor: "#48bb78",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "8px 16px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          + Nueva tarea
        </button>
      </div>
    </header>
  );
}

export default Header;