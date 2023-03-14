import { NavLink } from 'react-router-dom'
import { ENDPOINT_API, FUNCTION_ELIMINAR } from '../utils/api'
import { productImg } from '../assets/image'
import Start from './Start'

export function Producto (props) {
  const ENDPOINT = `${ENDPOINT_API}${FUNCTION_ELIMINAR}`

  const elminarArticulo = ({ id }) => {
    // TODO: agregar una confirmación antes de eliminar
    // TODO: mejorar mensaje de producto eliminado

    // ELIMINA ARTICULO
    fetch(`${ENDPOINT}${id}`)
      .then(response => response.json())
      .then(data => {
        alert(data.mensaje)
      })
  }

  return (
    <div className='card'>
      <img src={productImg} alt='Imagen Ejemplo' />
      <div className='card-info'>
        <span className='title'>{props.nombre}</span>
        <span>By <a href='#' className='brand'>{props.categoria}</a></span>

        <span className={` ${props.inStock ? 'inStock' : 'withoutStock'} `}>
          {(props.inStock) ? 'In Stock' : 'Without Stock'}
        </span>
        <span className='sku'>Inventario: {props.cantidad}</span>
        <span className='sku'>SKU: {props.sku}</span>
        <span className='price'>${props.precio}</span>
        <div>
          <Start calificacion={1} />
          <Start calificacion={2} />
          <Start calificacion={3} />
          <Start calificacion={4} />
          <Start calificacion={5} />
        </div>
      </div>
      <div className='actions'>

        <NavLink id='edit_link' to='/edit' className='actions_btn' state={{ id: props.id }} end>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='icon'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125' />
          </svg>
          Editar
        </NavLink>

        <button
          key={`delete${props.id}`} className='actions_btn btn_red' onClick={() => {
            elminarArticulo({ id: props.id })
            props.eliminar()
          }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='icon'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
          Eliminar
        </button>
      </div>
    </div>
  )
}
