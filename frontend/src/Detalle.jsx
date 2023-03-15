import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { productImg } from './assets/image'
import { ENDPOINT_API, FUNCTION_VER_PRODUCTO } from './utils/api'

function Detalle (props) {
    const location = useLocation()
    const { id } = location.state

  const [articulo, setArticulo] = useState('')
  const ENDPOINT_VER_PRODUCTO = `${ENDPOINT_API}${FUNCTION_VER_PRODUCTO}`
    
  useEffect(() => {
    fetch(`${ENDPOINT_VER_PRODUCTO}${id}`)
      .then(response => response.json())
      .then(data => {
        setArticulo(data)
        console.log(data)
      })
  }, [])
  
  return (
    <section className='contenedor_detalle'>
      <img src={productImg} alt='Imagen de Ejemplo' />

      <div className='card-info'>
        <span className='title'>{articulo.nombre}</span>
        <span className={` ${articulo.inStock ? 'inStock' : 'withoutStock'} `}>
            {(articulo.inStock) ? 'In Stock' : 'Without Stock'}
        </span>
        <span className='sku'>Inventario: {articulo.cantidad}</span>     
        <span className='price'>${articulo.precio}</span>
        <span className='sku'>SKU: {articulo.sku}</span>
        <span>{articulo.descripcion}</span>

      </div>

    </section>
  )
}

export default Detalle
