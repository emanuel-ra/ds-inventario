import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ENDPOINT_API, FUNCTION_LISTA_CATEGORIAS, FUNCTION_ACTUALIZA_PRODUCTO,FUNCTION_VER_PRODUCTO } from './utils/api'

function Editar () {
  const [categorias, setCategorias] = useState('')
  const [articulo, setArticulo] = useState('')
  const [respuesta, setRespuesta] = useState('')
  const [error, setError] = useState(0)

  const ENDPOINT_CATEGORIAS = `${ENDPOINT_API}${FUNCTION_LISTA_CATEGORIAS}`
  const ENDPOINT_ACTUALIZA_PRODUCTO = `${ENDPOINT_API}${FUNCTION_ACTUALIZA_PRODUCTO}`
  const ENDPOINT_VER_PRODUCTO = `${ENDPOINT_API}${FUNCTION_VER_PRODUCTO}`

  const location = useLocation()
  const { id } = location.state

  // FUNCTION: ACTUALIZA DATOS DEL PRODUCTO
  const handleClick = () => {
    const nombre = document.getElementById('nombre').value
    const sku = document.getElementById('sku').value
    const cantidad = document.getElementById('cantidad').value
    const precio = document.getElementById('precio').value
    const descripcion = document.getElementById('descripcion').value
    const categoria_id = document.getElementById('categoria_id').value

    if (nombre === '') {
      setRespuesta('Capture Nombre')
      setError(1)
      return false
    }
    if (sku === '') {
      setRespuesta('Capture SKU')
      setError(1)
      return false
    }

    if (cantidad === '') {
      setRespuesta('Capture cantidad')
      setError(1)
      return false
    }

    if (precio === '') {
      setRespuesta('Capture precio')
      setError(1)
      return false
    }

    if (descripcion === '') {
      setRespuesta('Capture descripcion')
      setError(1)
      return false
    }

    const data = {
      id,
      sku,
      nombre,
      descripcion,
      categoria_id,
      precio,
      cantidad
    }
    fetch(ENDPOINT_ACTUALIZA_PRODUCTO, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          // resetearForm()
          setError(0)
        }
        return response.json()
      })
      .then(data => {
        setRespuesta(data.mensaje)
        console.log(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  //  OBTENGO LOS DATOS DE LAS CATEGORÍAS MEDIANTE UN FETCH Y ACTUALIZO EL STATE DE CATEGORIAS
  useEffect(() => {
    fetch(ENDPOINT_CATEGORIAS)
      .then(response => response.json())
      .then(data => {
        setCategorias(data)
      })
  }, [])

  // PETICION PARA BUSCAR DATOS DEL PRODUCTO
  useEffect(() => {
    fetch(`${ENDPOINT_VER_PRODUCTO}${id}`)
      .then(response => response.json())
      .then(data => {
        setArticulo(data)
        // SELECCCIONAMOS EL VALOR POR DEFECTO DEL SELECT CATEGORIAS
        Array.from(document.getElementById('categoria_id').options).forEach(function (elementos) {
          if (elementos.value == data.categoria_id) { elementos.setAttribute('selected', true) }
        })
      })
  }, [])

  return (

    <div className='form'>
      <h1>Formulario de Edición</h1>

      <div key='formUpdateNombre' className='form-group'>
        <label>Nombre</label>
        <input type='text' id='nombre' defaultValue={articulo.nombre} />
      </div>

      <div key='formUpdateSku' className='form-group'>
        <label>SKU</label>
        <input type='text' id='sku' defaultValue={articulo.sku} />
      </div>

      <div key='formUpdateCantidad' className='form-group'>
        <label>Cantidad</label>
        <input type='number' id='cantidad' defaultValue={articulo.cantidad} />
      </div>

      <div key='formUpdatePrecio' className='form-group'>
        <label>Precio</label>
        <input type='number' id='precio' defaultValue={articulo.precio} />
      </div>

      <div key='formUpdateDescrip' className='form-group'>
        <label>Descripcion</label>
        <textarea id='descripcion' defaultValue={articulo.descripcion} />
      </div>

      <div key='formUpdateCategoria' className='form-group'>
        <label>Categoría</label>
        <select id='categoria_id'>
          {categorias && categorias.map(opt => {
            // selected = (opt.id == articulo.categoria_id)
            return (<option key={`opt${opt.id}`} value={opt.id}>{opt.nombre}</option>)
          })}
        </select>
      </div>

      <div key='formUpdateGuardar' className='action_form'>
        <NavLink id='register_link' to='/' className='btn_inicio' end>
          Inicio
        </NavLink>

        <button className='actions_save' onClick={handleClick}>
          Guardar
        </button>
      </div>

      {respuesta && <div className={`response ${error ? 'response-error' : 'response-success'} `}>{respuesta}</div>}

    </div>

  )
}

export default Editar
