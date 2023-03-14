import React from 'react'
import { productImg } from '../assets/image'
export function Producto (props) {
  return (
    <div className='card'>
      <img src={productImg} alt='Imagen Ejemplo' />
      <div className='card-info'>
        <span className='title'>{props.nombre}</span>
        <span>By <a href='#' className='brand'>{props.categoria}</a></span>

        <span className='inStock'>
          {(props.inStock) && 'In Stock'}
        </span>
        <span className='sku'>Inventario: {props.cantidad}</span>
        <span className='sku'>SKU: {props.sku}</span>
        <span className='price'>${props.precio}</span>
      </div>
      <div className='actions'>
        <button className='actions_btn'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg> 
            Editar
        </button>
        <button className='actions_btn btn_red'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='icon'>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Eliminar
        </button>
      </div>
    </div>
  )
}
