
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getPokemonList } from "../../../utils/api"
import SearchBar from "@/components/SearchBar"
import PokemonGrid from "@/components/PokemonGrid"

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  const query = searchParams.q || ""
  const { results: allPokemon } = await getPokemonList(1, 1000)

  const filteredPokemon = allPokemon.filter((pokemon: { name: string }) => pokemon.name?.toLowerCase().includes(query?.toLowerCase()))

  return (
    <div>
      <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to list
      </Link>
      <h1 className="text-3xl font-bold mb-6">Search Results for &quot;{query}&quot;</h1>
      <SearchBar />
      <PokemonGrid initialPokemonList={filteredPokemon} />
    </div>
  )
}

