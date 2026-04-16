function Header({ totalPendientes }) {
  return (
    <header style={{
      backgroundColor: "#2b6cb0",
      color: "#fff",
      padding: "16px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <h1 style={{ margin: 0, fontSize: "22px" }}>📋 TaskUPC</h1>
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
    </header>
  );
}

export default Header;