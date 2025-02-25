"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { Search, X } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SearchBar() {
  const [search, setSearch] = useState("")
  const router = useRouter()

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (search.trim()) {
        router.push(`/search?q=${encodeURIComponent(search.trim())}`, { scroll: false })
      }
    },
    [search, router],
  )

  return (
    <form onSubmit={handleSearch} className="relative mb-6">
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Pokemon"
        className="w-full p-2 pl-10 pr-10 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500-500"
        aria-label="Search Pokemon"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      {search && (
        <button
          type="button"
          onClick={() => setSearch("")}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          aria-label="Clear search"
        >
          <X />
        </button>
      )}
    </form>
  )
}
