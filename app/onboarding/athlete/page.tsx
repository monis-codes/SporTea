"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

export default function AthleteOnboarding() {
  const [sport, setSport] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [ageGroup, setAgeGroup] = useState("")
  const [bio, setBio] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, this would be an API call to save the profile
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "Profile created",
        description: "Your athlete profile has been created successfully.",
      })
      router.push("/dashboard")
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was an error creating your profile. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container max-w-3xl py-10">
      <Card>
        <CardHeader>
          <CardTitle>Complete Your Athlete Profile</CardTitle>
          <CardDescription>
            Tell us more about yourself as an athlete to help coaches and scouts discover you
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="sport">Primary Sport</Label>
              <Select value={sport} onValueChange={setSport} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your primary sport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cricket">Cricket</SelectItem>
                  <SelectItem value="football">Football</SelectItem>
                  <SelectItem value="hockey">Hockey</SelectItem>
                  <SelectItem value="badminton">Badminton</SelectItem>
                  <SelectItem value="athletics">Athletics</SelectItem>
                  <SelectItem value="kabaddi">Kabaddi</SelectItem>
                  <SelectItem value="wrestling">Wrestling</SelectItem>
                  <SelectItem value="boxing">Boxing</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialization">Specialization</Label>
              <Input
                id="specialization"
                placeholder="E.g., Fast Bowler, Midfielder, Sprinter"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ageGroup">Age Group</Label>
              <Select value={ageGroup} onValueChange={setAgeGroup} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your age group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under12">Under 12</SelectItem>
                  <SelectItem value="under15">Under 15</SelectItem>
                  <SelectItem value="under17">Under 17</SelectItem>
                  <SelectItem value="under19">Under 19</SelectItem>
                  <SelectItem value="under23">Under 23</SelectItem>
                  <SelectItem value="senior">Senior</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about your sports journey, achievements, and goals"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="min-h-[120px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Profile Picture</Label>
              <div className="flex items-center gap-4">
                <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                  Upload
                </div>
                <Button type="button" variant="outline" size="sm">
                  Upload Photo
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
              {isLoading ? "Creating Profile..." : "Complete Profile"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

