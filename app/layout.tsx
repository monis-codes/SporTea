import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { SidebarProvider } from "@/components/sidebar-provider"
import { MainSidebar, SidebarToggle } from "@/components/main-sidebar"
import { MobileNav } from "@/components/mobile-nav"
import { AuthProvider } from "@/components/auth-provider"
import Link from "next/link"
import "./globals.css"

export const metadata = {
  title: "SporTea - Connect Athletes, Coaches & Scouts",
  description: "A platform for Indian athletes, coaches, and scouts to connect and collaborate",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <SidebarProvider>
              {/* Header */}
              <header className="sticky top-0 w-full h-16 bg-background border-b z-[200] flex items-center px-6">
                <div className="flex items-center gap-3">
                  <SidebarToggle />
                  <Link 
                    href="/" 
                    className="font-bold text-xl text-green-600 hover:text-green-700 transition-colors"
                  >
                    SporTea
                  </Link>
                </div>
              </header>
              
              {/* Main content */}
              <div className="flex min-h-[calc(100vh-4rem)]">
                <MainSidebar />
                <div className="flex-1 pt-4">
                  <div className="container relative">{children}</div>
                </div>
              </div>
              <MobileNav />
              <Toaster />
            </SidebarProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'