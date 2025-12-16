'use client'

import { Search } from "lucide-react"

const SearchBar = () => {
    return (
        <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
                <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-zinc-500 w-4 h-4" />
                <input
                    type="text"
                    placeholder="Search requests, collections, workspaces..."
                    className="w-full pl-10 pr-16 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-violet-600 focus:border-violet-600 transition-all text-sm text-zinc-200 placeholder-zinc-500"
                />
                <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 px-2 py-0.5 text-xs font-medium text-zinc-500 bg-zinc-800 border border-zinc-700 rounded">
                    ⌘K
                </kbd>
            </div>
        </div>
    )
}

export default SearchBar