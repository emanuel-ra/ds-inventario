const ENDPOINT_PRODUCTOS = 'http://127.0.0.1:8000/api/productos/lista'

export const getProductos = async () => {
  const res = await fetch(ENDPOINT_PRODUCTOS)
  const data = await res.json()
  return data
}
