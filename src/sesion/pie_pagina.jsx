import React from 'react'

const pie_pagina = (props) => {
    return (
        <div>
            <footer className="bajo">

                <a className="navbar-brand" href="#"  ><img src={props.banano} alt=""
                    style={{ width: "70px", height: "50px" }} /></a>
                <a href="">
                    <i class="bi bi-envelope space"></i>
                </a>
                <a href="">
                    <i class="bi bi-facebook space"></i>
                </a>
                <a href="">
                    <i class="bi bi-whatsapp space"></i>
                </a>
                <a href="">
                    <i class="bi bi-youtube space"></i>
                </a>
                <a href="">
                    <i class="bi bi-instagram space"></i>
                </a>

            </footer>
        </div>
    )
}

export default pie_pagina
