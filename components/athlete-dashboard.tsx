"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Calendar, Clock, Dumbbell } from "lucide-react"
import Link from "next/link"

export function AthleteDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Athlete Dashboard</h1>
        <p className="text-muted-foreground">Track your progress and connect with coaches</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Profile Completion</CardTitle>
            <CardDescription>Complete your profile to get discovered</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Progress</span>
                <span className="font-medium">75%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-green-600 w-[75%]" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-600" />
                  <span className="text-sm">Add profile picture</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-muted" />
                  <span className="text-sm">Upload performance videos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-muted" />
                  <span className="text-sm">Add match history</span>
                </div>
              </div>
              <Link href="/profile/me">
                <Button variant="outline" className="w-full">
                  Complete Profile
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Recent Training</CardTitle>
            <CardDescription>Your latest training sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="min-w-[40px] text-center">
                  <div className="rounded-md bg-muted p-1">
                    <Dumbbell className="h-4 w-4 mx-auto" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Bowling Practice</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>Today</span>
                    <Clock className="ml-2 mr-1 h-3 w-3" />
                    <span>2 hours</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-[40px] text-center">
                  <div className="rounded-md bg-muted p-1">
                    <Dumbbell className="h-4 w-4 mx-auto" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Strength Training</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>Yesterday</span>
                    <Clock className="ml-2 mr-1 h-3 w-3" />
                    <span>1.5 hours</span>
                  </div>
                </div>
              </div>
              <Link href="/training-log">
                <Button variant="outline" className="w-full">
                  View All Training
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Coach Connections</CardTitle>
            <CardDescription>Coaches who viewed your profile</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Coach Vikram" />
                  <AvatarFallback>CV</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Coach Vikram</p>
                  <p className="text-sm text-muted-foreground">Mumbai Cricket Academy</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Coach Priya" />
                  <AvatarFallback>CP</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Coach Priya</p>
                  <p className="text-sm text-muted-foreground">National Sports Institute</p>
                </div>
              </div>
              <Link href="/athletes">
                <Button variant="outline" className="w-full">
                  Find More Coaches
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="achievements">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="feed">Latest Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="achievements" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Achievements</CardTitle>
              <CardDescription>Your latest accomplishments and medals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-yellow-100 p-3">
                    <Trophy className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">Best Bowler</h3>
                      <Badge variant="outline">Gold</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Mumbai School Championship, 2023</p>
                    <p className="text-sm">Took 5 wickets in the final match, helping the team secure victory.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-slate-100 p-3">
                    <Trophy className="h-6 w-6 text-slate-600" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">Player of the Tournament</h3>
                      <Badge variant="outline">Silver</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Inter-District Tournament, 2022</p>
                    <p className="text-sm">Recognized for consistent performance throughout the tournament.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="upcoming" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Matches, tournaments and training camps</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="min-w-[60px]">
                    <div className="text-center rounded-md border p-2">
                      <p className="text-xs text-muted-foreground">APR</p>
                      <p className="text-xl font-bold">15</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">State Championship</h3>
                    <p className="text-sm text-muted-foreground">Mumbai Cricket Stadium</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className="bg-green-600">Confirmed</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="min-w-[60px]">
                    <div className="text-center rounded-md border p-2">
                      <p className="text-xs text-muted-foreground">MAY</p>
                      <p className="text-xl font-bold">02</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Training Camp</h3>
                    <p className="text-sm text-muted-foreground">National Cricket Academy</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">Pending</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="feed" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Latest Activity</CardTitle>
              <CardDescription>Recent updates from your network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Coach Vikram" />
                    <AvatarFallback>CV</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p>
                      <span className="font-medium">Coach Vikram</span>{" "}
                      <span className="text-muted-foreground">posted about upcoming trials</span>
                    </p>
                    <p className="text-sm">Looking for fast bowlers for the state team. Trials next week!</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Arjun" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p>
                      <span className="font-medium">Arjun Singh</span>{" "}
                      <span className="text-muted-foreground">shared a training video</span>
                    </p>
                    <p className="text-sm">New bowling technique I've been practicing. Check it out!</p>
                    <p className="text-xs text-muted-foreground">Yesterday</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Link href="/feed">
                  <Button variant="outline" className="w-full">
                    View Full Feed
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

