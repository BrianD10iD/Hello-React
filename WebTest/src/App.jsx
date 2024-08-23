import { Fragment } from "react";
import Titulo from './componentes/titulo';
import Pie from './componentes/piePagina'
import Ciudad from "./componentes/Ciudad";

function App() {

  return (
    <>
      <Titulo />
      <Ciudad
        nombre="Brian"
        descripcion="Capital del peru es lima"
        imagen=""
      />

      <Ciudad
        nombre="Coila"
        descripcion="Capital del peru es arequipa"
        imagen=""
      />
      <Pie />
    </>
  );
}

export default App;