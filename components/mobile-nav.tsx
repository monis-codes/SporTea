"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/sidebar-provider"
import { Home, Users, Dumbbell, MessageSquare, Menu, User } from "lucide-react"
import { useAuth } from "@/components/auth-provider"

export function MobileNav() {
  const pathname = usePathname()
  const { toggleSidebar } = useSidebar()
  const { user } = useAuth()

  // Don't render on auth pages
  if (pathname?.startsWith("/auth")) return null

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname?.startsWith(path)) return true
    return false
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 bg-background border-t md:hidden">
      <div className="grid grid-cols-5 h-16">
        <Link href="/dashboard" className="flex items-center justify-center">
          <Button variant="ghost" size="icon" className={isActive("/dashboard") ? "text-green-600" : ""}>
            <Home className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="/feed" className="flex items-center justify-center">
          <Button variant="ghost" size="icon" className={isActive("/feed") ? "text-green-600" : ""}>
            <MessageSquare className="h-5 w-5" />
          </Button>
        </Link>
        <Link href="/athletes" className="flex items-center justify-center">
          <Button variant="ghost" size="icon" className={isActive("/athletes") ? "text-green-600" : ""}>
            <Users className="h-5 w-5" />
          </Button>
        </Link>
        {user?.role === "athlete" ? (
          <Link href="/training-log" className="flex items-center justify-center">
            <Button variant="ghost" size="icon" className={isActive("/training-log") ? "text-green-600" : ""}>
              <Dumbbell className="h-5 w-5" />
            </Button>
          </Link>
        ) : (
          <div className="flex items-center justify-center">
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        )}
        <Link href="/profile/me" className="flex items-center justify-center">
          <Button variant="ghost" size="icon" className={isActive("/profile") ? "text-green-600" : ""}>
            <User className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

