import React from 'react'

const pie = (props) => {
  return (
    <div>
       <div className="text-center p-5">
        <h1 className='fs-4'>{props.manzana}
        </h1>
        <button type="button" style={{margin: "0 auto", backgroundColor: "rgba(17, 82, 20)", color: "white"}} className="btn d-flex" data-bs-toggle="modal" data-bs-target="#exampleModal">
        MÁS INFORMACIÓN
    </button>
    </div>
    </div>
  )
}

export default pie
