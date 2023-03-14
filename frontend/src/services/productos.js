import { ENDPOINT_API, FUNCTION_LISTA } from '../utils/api'
export const getListado = async () => {
  const CAT_ENDPOINT_RANDOM_FACT = `${ENDPOINT_API}${FUNCTION_LISTA}`
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  return data
}