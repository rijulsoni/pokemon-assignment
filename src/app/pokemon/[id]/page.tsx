import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getPokemonDetails } from "../../../../utils/api"

export default async function PokemonDetail({ params }: { params: { id: string } }) {
  const pokemon = await getPokemonDetails(params.id)
  console.log(pokemon)

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6">
      <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to list
      </Link>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="relative w-64 h-64 mb-4 md:mb-0 md:mr-6">
          <Image
            src={pokemon.sprites.front_default || "/placeholder.svg"}
            alt={pokemon.name}
            layout="fill"
            objectFit="contain"
            className="bg-gray-700 rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2 capitalize">{pokemon.name}</h1>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Types:</h2>
            <div className="flex gap-2">
              {pokemon.types.map((type: { type: { name: string } }) => (
                <span key={type.type.name} className="bg-gray-700 px-3 py-1 rounded-full capitalize">
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Abilities:</h2>
            <ul className="list-disc list-inside">
              {pokemon.abilities.map((ability: { ability: { name: string } }) => (
                <li key={ability.ability.name} className="capitalize">
                  {ability.ability.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Stats:</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {pokemon.stats.map((stat: { stat: { name: string }, base_stat: number }) => (
            <div key={stat.stat.name} className="bg-gray-700 p-3 rounded-lg">
              <h3 className="font-semibold capitalize mb-1">{stat.stat.name}</h3>
              <div className="w-full bg-gray-600 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                ></div>
              </div>
              <p className="text-right mt-1">{stat.base_stat}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">Moves:</h2>
        <div className="flex flex-wrap gap-2">
          {pokemon.moves.slice(0, 10).map((move: { move: { name: string } }) => (
            <span key={move.move.name} className="bg-gray-700 px-3 py-1 rounded-full capitalize">
              {move.move.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
