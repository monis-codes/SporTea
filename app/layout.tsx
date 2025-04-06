import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { SidebarProvider } from "@/components/sidebar-provider"
import { MainSidebar } from "@/components/main-sidebar"
import { MobileNav } from "@/components/mobile-nav"
import { AuthProvider } from "@/components/auth-provider"
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
              <div className="flex min-h-screen">
                <MainSidebar />
                <div className="flex-1">
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