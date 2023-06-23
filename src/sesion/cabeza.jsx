import React from 'react'

const cabeza = (props) => {
    return (
        <div>
            <div class="text-center p-3">
                <h1 style={{ fontSize: "x-large" }}>Malezas</h1>
            </div>
            <div className="container">
                <div className="">
                    <div className="">



                        {props.piña} pueden considerarse todas aquellas plantas que provocan cambios desfavorables de la vegetación y
                        que afectan el aspecto estético de las áreas de interés a preservar.

                        Las guías de clasificación de las especies indeseables se realizan normalmente en función del hábitat o
                        de las áreas afectadas.

                        La Tabla 1 reseña 18 especies de malezas consideradas en 1977 como las importantes a nivel mundial.

                    </div>
                </div>
            </div>  
        </div>
    )
}

export default cabeza
