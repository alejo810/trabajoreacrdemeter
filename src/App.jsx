import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabeza from './sesion/cabeza'
import Pie from './sesion/pie'
import Central from './sesion/central'
import Pie_pagina from './sesion/pie_pagina'
import Encabezado from './encabezado'



function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Encabezado tamarindo = 'inicio'/>
      <Cabeza piña = 'Malezas'/>
      <Central aguacate = 'Cyperus rotundus L.'/>
      <Pie manzana ='A = anual; Ac = acuática; D = dicotiledónea; M = monocotiledónea; P = perenne'/>
      <Pie_pagina/>

    </>
  )
}

export default App
