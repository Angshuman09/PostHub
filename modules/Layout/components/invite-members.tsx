
"use client"
import { Plus } from "lucide-react"

const inviteMembers = () => {
  return (
    <button
      className="flex items-center space-x-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors font-medium text-sm"
    // onMouseDown={(e) => e.preventDefault()}
    >
      <Plus className="w-4 h-4" />
      <span>Invite</span>
    </button>
  )
}

export default inviteMembers