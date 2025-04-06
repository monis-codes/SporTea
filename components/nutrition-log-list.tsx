"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Utensils, Droplet } from "lucide-react"

// Mock data for nutrition logs
const NUTRITION_LOGS = [
  {
    id: "1",
    date: "2023-04-01",
    mealType: "Breakfast",
    description: "Oatmeal with banana, protein shake (30g protein)",
    calories: 550,
    protein: 40,
    hydration: 500,
  },
  {
    id: "2",
    date: "2023-04-01",
    mealType: "Lunch",
    description: "Grilled chicken breast, brown rice, mixed vegetables",
    calories: 650,
    protein: 45,
    hydration: 750,
  },
  {
    id: "3",
    date: "2023-04-01",
    mealType: "Pre-Workout",
    description: "Banana and protein bar",
    calories: 300,
    protein: 15,
    hydration: 500,
  },
  {
    id: "4",
    date: "2023-03-31",
    mealType: "Dinner",
    description: "Salmon, sweet potato, broccoli",
    calories: 700,
    protein: 40,
    hydration: 500,
  },
  {
    id: "5",
    date: "2023-03-31",
    mealType: "Post-Workout",
    description: "Protein shake with banana and peanut butter",
    calories: 400,
    protein: 30,
    hydration: 750,
  },
]

export function NutritionLogList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nutrition History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {NUTRITION_LOGS.map((log) => (
            <div key={log.id} className="flex gap-4">
              <div className="min-w-[50px] text-center">
                <div className="rounded-md bg-muted p-2">
                  <Utensils className="h-5 w-5 mx-auto" />
                </div>
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{log.mealType}</p>
                    <Badge variant="outline" className="ml-2">
                      {new Date(log.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span>{log.calories} cal</span>
                    <span>•</span>
                    <span>{log.protein}g protein</span>
                  </div>
                </div>
                <p className="text-sm">{log.description}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Droplet className="mr-1 h-4 w-4" />
                  <span>{log.hydration} ml</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

