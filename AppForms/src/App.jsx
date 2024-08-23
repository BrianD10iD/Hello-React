import { Fragment } from "react";
import Formulario from './componte/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css'

function app() {
  return (
    <>
      <div className="container container-fluid">
        <br />
        <br />
        <h1>Ingreso de Datos</h1>
        <Formulario/>
      </div>
    </>
  );
}

export default app;