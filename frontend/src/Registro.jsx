import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ENDPOINT_API, FUNCTION_LISTA_CATEGORIAS, FUNCTION_ALTA_PRODUCTO } from './utils/api'
function Registro () {
  const [categorias, setCategorias] = useState('')
  const [respuesta, setRespuesta] = useState('')
  const [error, setError] = useState(0)

  const ENDPOINT_CATEGORIAS = `${ENDPOINT_API}${FUNCTION_LISTA_CATEGORIAS}`
  const ENDPOINT_ALTA_PRODUCTO = `${ENDPOINT_API}${FUNCTION_ALTA_PRODUCTO}`

  //  OBTENGO LOS DATOS DE LAS CATEGORÍAS MEDIANTE UN FETCH Y ACTUALIZO EL STATE DE CATEGORIAS
  useEffect(() => {
    fetch(ENDPOINT_CATEGORIAS)
      .then(response => response.json())
      .then(data => {
        setCategorias(data)
      })
  }, [])

  const resetearForm = () => {
    document.getElementById('nombre').value = ''
    document.getElementById('sku').value = ''
    document.getElementById('cantidad').value = ''
    document.getElementById('precio').value = ''
    document.getElementById('descripcion').value = ''
  }

  const handleClick = () => {
    const nombre = document.getElementById('nombre').value
    const sku = document.getElementById('sku').value
    const cantidad = document.getElementById('cantidad').value
    const precio = document.getElementById('precio').value
    const descripcion = document.getElementById('descripcion').value
    const categoria_id = document.getElementById('categoria_id').value

    // VALIDACIONES PARA QUE NO VALLAN VALORES VACÍOS
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

    // JSON A ENVIAR
    const data = {
      sku,
      nombre,
      descripcion,
      categoria_id,
      precio,
      cantidad
    }

    fetch(ENDPOINT_ALTA_PRODUCTO, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          resetearForm()
          setError(0)
        }
        return response.json()
      })
      .then(data => {
        setRespuesta(data.mensaje)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <div className='form'>
      <h1>Formulario de Registro</h1>

      <div key='formNombre' className='form-group'>
        <label>Nombre</label>
        <input type='text' id='nombre' />
      </div>

      <div key='formSku' className='form-group'>
        <label>SKU</label>
        <input type='text' id='sku' />
      </div>

      <div key='formCantidad' className='form-group'>
        <label>Cantidad</label>
        <input type='number' id='cantidad' />
      </div>

      <div key='formPrecio' className='form-group'>
        <label>Precio</label>
        <input type='number' id='precio' />
      </div>

      <div key='formDescrip' className='form-group'>
        <label>Descripcion</label>
        <textarea id='descripcion' />
      </div>

      <div key='formCategoria' className='form-group'>
        <label>Categoría</label>
        <select id='categoria_id'>
          {categorias && categorias.map(opt => {
            return (<option key={`opt${opt.id}`} value={opt.id}>{opt.nombre}</option>)
          })}
        </select>
      </div>

      <div key='formGuardar' className='action_form'>
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

export default Registro
