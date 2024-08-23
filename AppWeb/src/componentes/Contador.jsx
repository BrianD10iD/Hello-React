import { useState } from "react";
import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function contador(){
    const [contar, setContar] = useState(0)  //"useState" determina el estado del numero, comienza en index 0
    const hacerClick = () =>{
        setContar(contar + 1);
    }

    return(
        <>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-auto">
                    <p className="display-6 text-center">El numero de clicks es: {contar} </p>
                    <button type="button" className="btn btn-success" onClick={hacerClick}>haz hecho click</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default contador;