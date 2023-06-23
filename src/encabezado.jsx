import React from 'react'

const encabezado = (props) => {
  return (
    <div>
     
       <nav className="navbar navbar-expand-lg" style={{background: "#115214"}}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src="./img/ggggg.png" alt=""
                    style={{width: "70px", height: "50px"}}/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="./index.html">{props.tamarindo}</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Capacitaciones
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="./tierra.html">Tierra</a></li>
                            <li><a className="dropdown-item" href="./productos.html">Productos</a></li>
                            <li><a className="dropdown-item" href="./fertilizantes.html">Fertilizantes</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default encabezado
