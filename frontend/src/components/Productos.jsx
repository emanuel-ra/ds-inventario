import { useListado } from '../hooks/useListado'
import { Producto } from './Producto'
function Productos () {
  const { datos, refrescar } = useListado()

  const handleClick = () => { refrescar() }


  return (
    <section>
      {datos && datos.map((el, index) => {
        return (<div key={index}><Producto id={el.id} sku={el.sku} cantidad={el.cantidad} nombre={el.nombre} categoria={el.categoria.nombre} inStock={el.estado} precio={el.precio} eliminar={handleClick} /></div>)
      })}
    </section>
  )
}

export default Productos
