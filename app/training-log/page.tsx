"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Clock, Dumbbell, Utensils } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"
import { TrainingLogList } from "@/components/training-log-list"
import { NutritionLogList } from "@/components/nutrition-log-list"

export default function TrainingLogPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [trainingType, setTrainingType] = useState("")
  const [duration, setDuration] = useState("")
  const [notes, setNotes] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmitTraining = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, this would be an API call to save the training log
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "Training log added",
        description: "Your training session has been logged successfully.",
      })
      // Reset form
      setTrainingType("")
      setDuration("")
      setNotes("")
      setDate(new Date())
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was an error saving your training log. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Training & Nutrition Log</h1>
          <p className="text-muted-foreground">Track your training sessions and nutrition to improve performance</p>
        </div>

        <Tabs defaultValue="training" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="training">
              <Dumbbell className="mr-2 h-4 w-4" />
              Training
            </TabsTrigger>
            <TabsTrigger value="nutrition">
              <Utensils className="mr-2 h-4 w-4" />
              Nutrition
            </TabsTrigger>
          </TabsList>

          <TabsContent value="training" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add Training Session</CardTitle>
                <CardDescription>Log your training activities to track your progress</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmitTraining}>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <Input
                          id="duration"
                          placeholder="e.g., 1.5 hours"
                          value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">Training Type</Label>
                    <Select value={trainingType} onValueChange={setTrainingType} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select training type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Training</SelectItem>
                        <SelectItem value="strength">Strength & Conditioning</SelectItem>
                        <SelectItem value="cardio">Cardio</SelectItem>
                        <SelectItem value="match">Match/Game Practice</SelectItem>
                        <SelectItem value="recovery">Recovery Session</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Details about your training session..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
                    {isLoading ? "Saving..." : "Save Training Log"}
                  </Button>
                </CardFooter>
              </form>
            </Card>

            <TrainingLogList />
          </TabsContent>

          <TabsContent value="nutrition" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add Nutrition Entry</CardTitle>
                <CardDescription>Log your meals and hydration to maintain optimal nutrition</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="meal-date">Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="meal-type">Meal Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select meal type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="breakfast">Breakfast</SelectItem>
                        <SelectItem value="lunch">Lunch</SelectItem>
                        <SelectItem value="dinner">Dinner</SelectItem>
                        <SelectItem value="snack">Snack</SelectItem>
                        <SelectItem value="pre-workout">Pre-Workout</SelectItem>
                        <SelectItem value="post-workout">Post-Workout</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="calories">Calories</Label>
                    <Input id="calories" type="number" placeholder="e.g., 500" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="protein">Protein (g)</Label>
                    <Input id="protein" type="number" placeholder="e.g., 30" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="meal-description">Description</Label>
                  <Textarea id="meal-description" placeholder="Describe what you ate..." className="min-h-[100px]" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hydration">Hydration (ml)</Label>
                  <Input id="hydration" type="number" placeholder="e.g., 500" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Save Nutrition Log</Button>
              </CardFooter>
            </Card>

            <NutritionLogList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

