"use client"

import { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard"
import type { Pokemon } from "../../types/pokemon"

interface PokemonGridProps {
  initialPokemonList: Pokemon[]
}

export default function PokemonGrid({ initialPokemonList }: PokemonGridProps) {
  const [pokemonList, setPokemonList] = useState(initialPokemonList)
  const [filteredList, setFilteredList] = useState(initialPokemonList)

  useEffect(() => {
    setPokemonList(initialPokemonList)
    setFilteredList(initialPokemonList)
  }, [initialPokemonList])

  useEffect(() => {
    const handleSearch = (e: CustomEvent) => {
      const searchTerm = (e.detail as string)?.toLowerCase()
      const filtered = pokemonList.filter((pokemon) => pokemon?.name.toLowerCase().includes(searchTerm))
      setFilteredList(filtered)
    }

    window.addEventListener("search", handleSearch as EventListener)
    return () => window.removeEventListener("search", handleSearch as EventListener)
  }, [pokemonList])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  )
}

