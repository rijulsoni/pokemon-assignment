import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  nextPage: number | null
  prevPage: number | null
}

export default function Pagination({ currentPage, totalPages, nextPage, prevPage }: PaginationProps) {
  return (
    <div className="flex justify-center gap-4">
      {prevPage && (
        <Link href={`/?page=${prevPage}`} className="flex items-center text-blue-400 hover:text-blue-300">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Link>
      )}
      <span className="text-gray-400">
        Page {currentPage} of {totalPages}
      </span>
      {nextPage && (
        <Link href={`/?page=${nextPage}`} className="flex items-center text-blue-400 hover:text-blue-300">
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      )}
    </div>
  )
}

