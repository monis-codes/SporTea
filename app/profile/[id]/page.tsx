"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Trophy, Calendar, Clock, Activity, User, MapPin } from "lucide-react"

export default function ProfilePage() {
  const params = useParams()
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call to fetch the profile
    const fetchProfile = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock data
        setProfile({
          id: params.id,
          name: "Rahul Sharma",
          role: "athlete",
          sport: "Cricket",
          specialization: "Fast Bowler",
          ageGroup: "Under 19",
          location: "Mumbai, Maharashtra",
          bio: "Passionate fast bowler with 5 years of experience. Represented Mumbai U-19 team and aspiring to play for India.",
          achievements: [
            { id: 1, title: "Best Bowler", event: "Mumbai School Championship", year: "2022" },
            { id: 2, title: "Player of the Tournament", event: "Inter-District Tournament", year: "2021" },
            { id: 3, title: "Most Wickets", event: "State Youth Championship", year: "2020" },
          ],
          stats: {
            matches: 45,
            wickets: 78,
            bestFigures: "5/23",
            economy: 4.2,
          },
          trainingLogs: [
            { id: 1, date: "2023-04-01", duration: "2 hours", type: "Bowling Practice", notes: "Worked on yorkers" },
            { id: 2, date: "2023-03-29", duration: "1.5 hours", type: "Fitness", notes: "Strength training" },
            { id: 3, date: "2023-03-27", duration: "3 hours", type: "Match Practice", notes: "Intra-squad match" },
          ],
        })
      } catch (error) {
        console.error("Error fetching profile:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [params.id])

  if (loading) {
    return <div className="py-10 text-center">Loading profile...</div>
  }

  if (!profile) {
    return <div className="py-10 text-center">Profile not found</div>
  }

  return (
    <div className="container py-8">
      <div className="grid gap-6 md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr]">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt={profile.name} />
                  <AvatarFallback>
                    {profile.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h2 className="text-2xl font-bold">{profile.name}</h2>
                  <p className="text-muted-foreground">{profile.specialization}</p>
                  <div className="flex justify-center">
                    <Badge className="bg-green-600">{profile.sport}</Badge>
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span>{profile.ageGroup}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-muted-foreground" />
                  <span>{profile.stats.matches} Matches</span>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="space-y-2">
                <h3 className="font-medium">About</h3>
                <p className="text-sm text-muted-foreground">{profile.bio}</p>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-green-600 hover:bg-green-700">Connect</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {profile.achievements.map((achievement: any) => (
                <div key={achievement.id} className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="font-medium">{achievement.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {achievement.event}, {achievement.year}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Tabs defaultValue="stats">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="stats">Stats</TabsTrigger>
              <TabsTrigger value="training">Training Logs</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
            </TabsList>
            <TabsContent value="stats" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Cricket Statistics</CardTitle>
                  <CardDescription>Performance statistics for {profile.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="space-y-2 rounded-lg border p-4">
                      <p className="text-sm text-muted-foreground">Matches</p>
                      <p className="text-2xl font-bold">{profile.stats.matches}</p>
                    </div>
                    <div className="space-y-2 rounded-lg border p-4">
                      <p className="text-sm text-muted-foreground">Wickets</p>
                      <p className="text-2xl font-bold">{profile.stats.wickets}</p>
                    </div>
                    <div className="space-y-2 rounded-lg border p-4">
                      <p className="text-sm text-muted-foreground">Best Figures</p>
                      <p className="text-2xl font-bold">{profile.stats.bestFigures}</p>
                    </div>
                    <div className="space-y-2 rounded-lg border p-4">
                      <p className="text-sm text-muted-foreground">Economy</p>
                      <p className="text-2xl font-bold">{profile.stats.economy}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="training" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Training Logs</CardTitle>
                  <CardDescription>Recent training activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {profile.trainingLogs.map((log: any) => (
                      <div key={log.id} className="flex gap-4">
                        <div className="min-w-[50px] text-center">
                          <div className="rounded-md bg-muted p-2">
                            <Calendar className="h-5 w-5 mx-auto" />
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
            </TabsContent>
            <TabsContent value="media" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Media Gallery</CardTitle>
                  <CardDescription>Videos and photos of performances</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="overflow-hidden rounded-lg border bg-muted">
                        <div className="aspect-video w-full bg-muted">
                          <div className="flex h-full items-center justify-center">Media {item}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

