import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Los estilos globales se importan una sola vez, aqui.
// El orden importa: variables primero, porque global.css las usa.
import "./styles/variables.css";
import "./styles/global.css";

// createRoot toma el div#root de index.html y monta ahi el arbol de componentes.
// StrictMode es una ayuda de desarrollo: ejecuta los efectos dos veces para
// detectar errores. No se ejecuta asi en produccion. Se explica en la sesion 4.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
