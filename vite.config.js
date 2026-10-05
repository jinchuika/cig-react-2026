import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // SESION 6 - DESPLIEGUE
  // Si publica en Vercel o Netlify, deje "base" como esta.
  // Si publica en GitHub Pages dentro de un subdirectorio, descomente la linea
  // siguiente y escriba el nombre exacto de su repositorio entre las barras.
  // Sin esto la pagina desplegada carga en blanco.
  // base: "/react-2026/",

  server: {
    port: 5173,
    open: true, // abre el navegador automaticamente al ejecutar npm run dev
  },
});
