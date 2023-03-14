import React from 'react'

function Registro() {
  return (
    <div className='form'>
        
        <div className=''>
            <label>Nombre</label>
            <input type="text" />
        </div>

        <div className=''>
            <label>SKU</label>
            <input type="text" />
        </div>

        <div className=''>
            <label>Stock</label>
            <input type="number" />
        </div>

        <div className=''>
            <label>Descripcion</label>
            <textarea id=""></textarea>
        </div>

    </div>
  )
}

export default Registro