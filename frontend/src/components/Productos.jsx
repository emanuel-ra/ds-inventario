import { useProductos } from '../hooks/useProductos'

function Productos () {
  const datos = useProductos()
  console.log(datos.productos)
  return (
    <section>
        {
            datos.map(producto => {
                console.log(producto)
            })
        }
    </section>
  )
}

export default Productos
