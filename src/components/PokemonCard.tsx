import Link from "next/link"
import Image from "next/image"
import type { Pokemon } from "../../types/pokemon"

interface PokemonCardProps {
  pokemon: Pokemon
}

// Helper function to extract Pokémon ID from URL
const getPokemonId = (url: string): string => url.split("/").filter(Boolean).pop() || "1"

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const id = getPokemonId(pokemon.url)
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <Link href={`/pokemon/${id}`} className="block">
      <div className="flex items-center justify-center flex-col bg-gray-800 rounded-lg shadow-lg p-4 hover:bg-gray-700 transition-colors">
        <div className="w-32 h-32 mx-auto relative">
          <Image
            src={imageUrl}
            alt={pokemon.name}
            width={128}
            height={128}
            sizes="(max-width: 768px) 64px, (max-width: 1024px) 96px, 128px"
            className="p-4"
            style={{ objectFit: "contain" }}
          />
        </div>
        <h2 className="text-center mt-2 capitalize text-lg font-semibold">{pokemon.name}</h2>
      </div>
    </Link>
  )
}
