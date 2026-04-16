import { createContext, useContext, useEffect, useState } from "react";

const TareasContext = createContext();

const tareasIniciales = [
  { id: 1, titulo: "Parcial de Cálculo", materia: "Matemáticas", fecha: "2025-05-10", completada: false },
  { id: 2, titulo: "Informe de Laboratorio", materia: "Física", fecha: "2025-05-08", completada: true },
  { id: 3, titulo: "Ensayo Literario", materia: "Español", fecha: "2025-05-15", completada: false },
  { id: 4, titulo: "Proyecto de Circuitos", materia: "Electrónica", fecha: "2025-05-12", completada: false },
  { id: 5, titulo: "Quiz de Química Orgánica", materia: "Química", fecha: "2025-05-07", completada: true },
];

export function TareasProvider({ children }) {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem("tareas");
    return guardadas ? JSON.parse(guardadas) : tareasIniciales;
  });

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  function toggleTarea(id) {
    setTareas(prev =>
      prev.map(t => t.id === id ? { ...t, completada: !t.completada } : t)
    );
  }

  function agregarTarea({ titulo, materia, fecha }) {
    const nueva = {
      id: Date.now(),
      titulo,
      materia,
      fecha,
      completada: false,
    };
    setTareas(prev => [...prev, nueva]);
  }

  function eliminarTarea(id) {
    setTareas(prev => prev.filter(t => t.id !== id));
  }

  return (
    <TareasContext.Provider value={{ tareas, toggleTarea, agregarTarea, eliminarTarea }}>
      {children}
    </TareasContext.Provider>
  );
}

export function useTareas() {
  return useContext(TareasContext);
}