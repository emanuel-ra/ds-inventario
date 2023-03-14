import { useEffect, useState } from 'react'
import { getListado } from '../services/productos'
export function useListado () {
  const [datos, setDatos] = useState('')

  //  OBTENGO LOS DATOS MEDIANTE UN FETCH
  const refrescar = () => {
    getListado().then(lista => setDatos(lista))   
  }
  useEffect(refrescar, [])

  return { datos, refrescar }
}
