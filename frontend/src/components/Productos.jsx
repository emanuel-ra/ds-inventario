import { useEffect, useState } from 'react'
import { Producto } from './Producto'
function Productos () {
  const [datos, setDatos] = useState('')

  //  OBTENGO LOS DATOS MEDIANTE UN FETCH
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/productos/lista')
      .then(response => response.json())
      .then(data => {
        setDatos(data)
      })
  }, [])

  return (
    <section>
      {datos && datos.map((el, index) => {
        return (<div key={index}><Producto id={el.id} sku={el.sku} cantidad={el.cantidad} nombre={el.nombre} categoria={el.categoria.nombre} inStock={el.estado} precio={el.precio} /></div>)
      })}
    </section>
  )
}

export default Productos
