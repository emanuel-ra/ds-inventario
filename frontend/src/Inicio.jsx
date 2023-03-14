import React from 'react'
import Productos from './components/Productos';

import { NavLink } from "react-router-dom";

function Inicio() {
  return (
    <div>
        <NavLink id="register_link" to={`/registrar`} end>
            Registrar
        </NavLink>

        <Productos />
    </div>
  )
}

export default Inicio