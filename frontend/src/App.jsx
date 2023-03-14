import Inicio from './Inicio'
import { Route, Routes } from "react-router-dom";
import './App.css'

function App () {
  return (
    <main className=''>

      <Routes>
        <Route path='/' element={<Inicio />} />
      </Routes>
    </main>
  )
}

export default App
