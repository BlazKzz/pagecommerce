import React from 'react'
import Navbar from './Componentes/Navbar/Navbar'
import Ropaoversize from './Productos/Oversize/Ropaoversize'

function App() {
  return(
    <>
      <Navbar />
      <Ropaoversize 
      imagenSrc1="./public/Poloversize/Captura1.jpg" imagenAlt1="captura1" 
      imagenSrc2="./public/Poloversize/Captura2.jpg" imagenAlt2="captura2" 
      imagenSrc3="./public/Poloversize/Captura3.jpg" imagenAlt3="captura3" 
      imagenSrc4="./public/Poloversize/Captura4.jpg" imagenAlt4="captura4" 
      imagenSrc5="./public/Poloversize/Captura5.jpg" imagenAlt5="captura5" 
      />
    </>
  )
}

export default App