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
import { Checkbox } from "@/components/ui/checkbox"

export default function CoachOnboarding() {
  const [sport, setSport] = useState("")
  const [experience, setExperience] = useState("")
  const [organization, setOrganization] = useState("")
  const [bio, setBio] = useState("")
  const [sportsInterests, setSportsInterests] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleSportInterestChange = (sport: string) => {
    setSportsInterests((current) =>
      current.includes(sport) ? current.filter((s) => s !== sport) : [...current, sport],
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, this would be an API call to save the profile
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "Profile created",
        description: "Your coach profile has been created successfully.",
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
          <CardTitle>Complete Your Coach/Scout Profile</CardTitle>
          <CardDescription>Tell us more about yourself to help connect with athletes</CardDescription>
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
              <Label htmlFor="experience">Years of Experience</Label>
              <Input
                id="experience"
                type="number"
                placeholder="E.g., 5"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization">Organization/Institution</Label>
              <Input
                id="organization"
                placeholder="E.g., Delhi Sports Academy"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Sports Interests</Label>
              <div className="grid grid-cols-2 gap-2">
                {["Cricket", "Football", "Hockey", "Badminton", "Athletics", "Kabaddi", "Wrestling", "Boxing"].map(
                  (sport) => (
                    <div key={sport} className="flex items-center space-x-2">
                      <Checkbox
                        id={sport.toLowerCase()}
                        checked={sportsInterests.includes(sport.toLowerCase())}
                        onCheckedChange={() => handleSportInterestChange(sport.toLowerCase())}
                      />
                      <Label htmlFor={sport.toLowerCase()}>{sport}</Label>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                placeholder="Tell us about your coaching experience, achievements, and what you look for in athletes"
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

