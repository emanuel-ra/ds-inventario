import React from 'react'
import Productos from './components/Productos'

import { NavLink } from 'react-router-dom'

function Inicio () {
  return (
    <div className='container'>
      <NavLink id='register_link' to='/registrar' className='btn_registro' end>
        Registrar
      </NavLink>
      <Productos />
    </div>
  )
}

export default Inicio
