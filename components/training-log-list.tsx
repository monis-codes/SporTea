"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Dumbbell } from "lucide-react"

// Mock data for training logs
const TRAINING_LOGS = [
  {
    id: "1",
    date: "2023-04-01",
    duration: "2 hours",
    type: "Technical Training",
    notes: "Worked on bowling yorkers. Made good progress with accuracy.",
  },
  {
    id: "2",
    date: "2023-03-29",
    duration: "1.5 hours",
    type: "Strength & Conditioning",
    notes: "Focus on lower body strength. Squats, lunges, and deadlifts.",
  },
  {
    id: "3",
    date: "2023-03-27",
    duration: "3 hours",
    type: "Match Practice",
    notes: "Intra-squad match. Took 3 wickets and scored 25 runs.",
  },
  {
    id: "4",
    date: "2023-03-25",
    duration: "1 hour",
    type: "Recovery Session",
    notes: "Light stretching and foam rolling to recover from yesterday's match.",
  },
  {
    id: "5",
    date: "2023-03-23",
    duration: "2.5 hours",
    type: "Technical Training",
    notes: "Working on batting technique against spin bowling.",
  },
]

export function TrainingLogList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Training History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {TRAINING_LOGS.map((log) => (
            <div key={log.id} className="flex gap-4">
              <div className="min-w-[50px] text-center">
                <div className="rounded-md bg-muted p-2">
                  <Dumbbell className="h-5 w-5 mx-auto" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{log.type}</p>
                  <Badge variant="outline" className="ml-2">
                    {new Date(log.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{log.duration}</span>
                </div>
                <p className="text-sm">{log.notes}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

