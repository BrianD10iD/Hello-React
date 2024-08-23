import { Fragment } from "react";
import Contador from './componentes/Contador'
import Acordeon from './componentes/Acordeon'
import Carrusel from './componentes/Carrusel'
import Listado from './componentes/Listado'

function app(){
  return(
    <>
      <Carrusel/>
      <Contador/>
      <Acordeon/>
      <Listado/>
    </>
  )
}

export default app;