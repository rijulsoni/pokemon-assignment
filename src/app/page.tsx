
import PokemonGrid from "@/components/PokemonGrid"
import SearchBar from "@/components/SearchBar"
import { getPokemonList } from "../../utils/api"
import Pagination from "@/components/Pagination"


export default async function Home({
  searchParams,
}: {
  searchParams: { page: string }
}) {
  const page = Number(searchParams.page) || 1
  const { results: pokemonList, totalCount, nextPage, prevPage } = await getPokemonList(page)

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Explore Pokemon</h1>

      <SearchBar />
      <PokemonGrid initialPokemonList={pokemonList} />
     <div className="mt-6 flex justify-center">
      <Pagination currentPage={page} totalPages={Math.ceil(totalCount / 20)} nextPage={nextPage} prevPage={prevPage} />
      </div>
    </div>
  )
}

