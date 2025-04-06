"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSidebar } from "@/components/sidebar-provider"
import { useAuth } from "@/components/auth-provider"
import { Home, Users, Dumbbell, MessageSquare, LogOut, X, User } from "lucide-react"

export function MainSidebar() {
  const pathname = usePathname()
  const { open, setOpen, isMobile } = useSidebar()
  const { user, logout } = useAuth()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Don't render sidebar on auth pages
  if (pathname?.startsWith("/auth")) return null

  // Mobile sidebar
  if (isMobile) {
    return (
      <>
        {open && (
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
        )}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-72 bg-background shadow-lg transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex h-16 items-center justify-between px-4 border-b">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-green-600">
              SporTea
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <SidebarContent />
        </div>
      </>
    )
  }

  // Desktop sidebar
  return (
    <div
      className={`hidden md:flex flex-col border-r bg-background h-screen sticky top-0 ${open ? "w-64" : "w-0"} transition-all duration-300`}
    >
      <div className="flex h-16 items-center px-4 border-b">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-green-600">
          SporTea
        </Link>
      </div>
      <SidebarContent />
    </div>
  )
}

function SidebarContent() {
  const pathname = usePathname()
  const { user, logout } = useAuth()
  const { setOpen } = useSidebar()

  const handleLogout = () => {
    logout()
    setOpen(false)
  }

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname?.startsWith(path)) return true
    return false
  }

  return (
    <>
      <ScrollArea className="flex-1 py-4">
        <nav className="grid gap-1 px-2">
          <Link href="/dashboard" onClick={() => setOpen(false)}>
            <Button variant={isActive("/dashboard") ? "secondary" : "ghost"} className="w-full justify-start">
              <Home className="mr-2 h-5 w-5" />
              Dashboard
            </Button>
          </Link>
          <Link href="/feed" onClick={() => setOpen(false)}>
            <Button variant={isActive("/feed") ? "secondary" : "ghost"} className="w-full justify-start">
              <MessageSquare className="mr-2 h-5 w-5" />
              Activity Feed
            </Button>
          </Link>
          <Link href="/athletes" onClick={() => setOpen(false)}>
            <Button variant={isActive("/athletes") ? "secondary" : "ghost"} className="w-full justify-start">
              <Users className="mr-2 h-5 w-5" />
              Discover Athletes
            </Button>
          </Link>
          {user?.role === "athlete" && (
            <Link href="/training-log" onClick={() => setOpen(false)}>
              <Button variant={isActive("/training-log") ? "secondary" : "ghost"} className="w-full justify-start">
                <Dumbbell className="mr-2 h-5 w-5" />
                Training Log
              </Button>
            </Link>
          )}
          <Link href="/profile/me" onClick={() => setOpen(false)}>
            <Button variant={isActive("/profile/me") ? "secondary" : "ghost"} className="w-full justify-start">
              <User className="mr-2 h-5 w-5" />
              My Profile
            </Button>
          </Link>
        </nav>
      </ScrollArea>

      <div className="mt-auto border-t p-4">
        <div className="flex items-center gap-3 mb-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="overflow-hidden">
            <p className="text-sm font-medium leading-none truncate">{user?.name || "Guest"}</p>
            <p className="text-xs text-muted-foreground truncate">{user?.email || ""}</p>
          </div>
        </div>
        <Button variant="outline" className="w-full justify-start" onClick={handleLogout}>
          <LogOut className="mr-2 h-5 w-5" />
          Log out
        </Button>
      </div>
    </>
  )
}

