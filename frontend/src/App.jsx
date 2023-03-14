import Inicio from './Inicio'
import Registro from './Registro';
import { Route, Routes } from "react-router-dom";
import './App.css'

function App () {
  return (
    <main className=''>

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/registrar' element={<Registro />} />
      </Routes>
    </main>
  )
}

export default App
