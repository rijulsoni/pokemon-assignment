import Link from "next/link"
import { Home } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-gray-100 w-64 min-h-screen flex flex-col">
      <div className="p-4">
        <h1 className="text-xl font-bold hidden sm:block">Poké Explorer</h1>
        <div className="sm:hidden text-center">
          <span className="text-2xl">P</span>
        </div>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <Home className="w-6 h-6 mr-2" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </li>

        </ul>
      </nav>
    </aside>
  )
}

