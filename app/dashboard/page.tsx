"use client"

import { useAuth } from "@/components/auth-provider"
import { AthleteDashboard } from "@/components/athlete-dashboard"
import { CoachDashboard } from "@/components/coach-dashboard"

export default function Dashboard() {
  const { user } = useAuth()

  if (!user) {
    return <div>Loading...</div>
  }

  return <div className="py-6">{user.role === "athlete" ? <AthleteDashboard /> : <CoachDashboard />}</div>
}

