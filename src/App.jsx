// App es el unico archivo que sabe de donde salen los datos.
// En la sesion 4 esta linea se cambia por una llamada a la API y
// ningun otro componente se modifica.
import { ordenes } from "./data/datos.js";

import Panel from "./components/Panel.jsx";
import ResumenOrdenes from "./components/ResumenOrdenes.jsx";
import ListaOrdenes from "./components/ListaOrdenes.jsx";
import "./App.css";

function App() {
  return (
    <div className="contenedor">
      <header className="cabecera">
        <p className="cabecera__etiqueta">Serviclima, S.A.</p>
        <h1>Panel de ordenes de servicio</h1>
      </header>

      <Panel titulo="Resumen">
        <ResumenOrdenes ordenes={ordenes} />
      </Panel>

      <Panel titulo={`Ordenes registradas (${ordenes.length})`}>
        <ListaOrdenes ordenes={ordenes} />
      </Panel>
    </div>
  );
}

export default App;
