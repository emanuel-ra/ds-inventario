import { useEffect, useState } from 'react'
import { getProductos } from '../services/products'

export function useProductos () {
  const [productos, setProductos] = useState()

  const ObtenerProductos = () => {
    getProductos().then(datos => setProductos(datos))
  }

  useEffect(ObtenerProductos, [])

  return { productos }
}
