'use client'

import { signOut } from "next-auth/react"

export function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="bg-[#2D2D2D] hover:bg-[#3D3D3D] text-white px-4 py-2 rounded-lg transition-colors duration-300"
    >
      Sign Out
    </button>
  )
} 