const API_BASE_URL = "https://pokeapi.co/api/v2"

export async function getPokemonList(page = 1, limit = 20) {
  const offset = (page - 1) * limit
  const response = await fetch(`${API_BASE_URL}/pokemon?offset=${offset}&limit=${limit}`)
  const data = await response.json()
  return {
    results: data.results,
    totalCount: data.count,
    nextPage: data.next ? page + 1 : null,
    prevPage: page > 1 ? page - 1 : null,
  }
}

export async function getPokemonDetails(id: string) {
  const response = await fetch(`${API_BASE_URL}/pokemon/${id}`)
  return await response.json()
}

