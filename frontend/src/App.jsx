import Inicio from './Inicio'
import Registro from './Registro';
import Editar from './Editar'
import Detalle from './Detalle';
import { Route, Routes } from "react-router-dom";
import './App.css'

function App () {
  return (
    <main className=''>

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/registrar' element={<Registro />} />
        <Route path='/edit' element={<Editar />} />
        <Route path='/detalle' element={<Detalle />} />
      </Routes>
    </main>
  )
}

export default App
