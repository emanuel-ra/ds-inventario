import Inicio from './Inicio'
import Registro from './Registro';
import Editar from './Editar'
import { Route, Routes } from "react-router-dom";
import './App.css'

function App () {
  return (
    <main className=''>

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/registrar' element={<Registro />} />
        <Route path='/edit' element={<Editar />} />
      </Routes>
    </main>
  )
}

export default App
