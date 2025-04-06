"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import Link from "next/link"

export function CoachDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Coach Dashboard</h1>
        <p className="text-muted-foreground">Discover and connect with talented athletes</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Profile Completion</CardTitle>
            <CardDescription>Complete your profile to attract athletes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Progress</span>
                <span className="font-medium">80%</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-green-600 w-[80%]" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-600" />
                  <span className="text-sm">Add profile picture</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-muted" />
                  <span className="text-sm">Add coaching certifications</span>
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
            <CardTitle>Athlete Connections</CardTitle>
            <CardDescription>Athletes you're connected with</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Rahul Sharma" />
                  <AvatarFallback>RS</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Rahul Sharma</p>
                  <div className="flex items-center gap-1">
                    <Badge variant="outline" className="text-xs">
                      Cricket
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      U19
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Priya Patel" />
                  <AvatarFallback>PP</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Priya Patel</p>
                  <div className="flex items-center gap-1">
                    <Badge variant="outline" className="text-xs">
                      Badminton
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      U17
                    </Badge>
                  </div>
                </div>
              </div>
              <Link href="/athletes">
                <Button variant="outline" className="w-full">
                  Find More Athletes
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Talent Discovery</CardTitle>
            <CardDescription>Find promising athletes by sport</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/athletes?sport=cricket"
                  className="flex flex-col items-center justify-center p-3 border rounded-lg hover:bg-muted"
                >
                  <div className="text-2xl mb-1">🏏</div>
                  <span className="text-sm">Cricket</span>
                </Link>
                <Link
                  href="/athletes?sport=football"
                  className="flex flex-col items-center justify-center p-3 border rounded-lg hover:bg-muted"
                >
                  <div className="text-2xl mb-1">⚽</div>
                  <span className="text-sm">Football</span>
                </Link>
                <Link
                  href="/athletes?sport=badminton"
                  className="flex flex-col items-center justify-center p-3 border rounded-lg hover:bg-muted"
                >
                  <div className="text-2xl mb-1">🏸</div>
                  <span className="text-sm">Badminton</span>
                </Link>
                <Link
                  href="/athletes?sport=athletics"
                  className="flex flex-col items-center justify-center p-3 border rounded-lg hover:bg-muted"
                >
                  <div className="text-2xl mb-1">🏃</div>
                  <span className="text-sm">Athletics</span>
                </Link>
              </div>
              <Link href="/athletes">
                <Button variant="outline" className="w-full">
                  <Search className="mr-2 h-4 w-4" />
                  Browse All Sports
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recommended">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="feed">Latest Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="recommended" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Athletes</CardTitle>
              <CardDescription>Athletes that match your coaching profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Arjun Singh" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Arjun Singh</h3>
                      <Badge className="bg-green-600">95% Match</Badge>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline">Football</Badge>
                      <Badge variant="outline">Midfielder</Badge>
                      <Badge variant="outline">U23</Badge>
                    </div>
                    <p className="text-sm">
                      University team captain with 5 years of experience. Looking for professional coaching.
                    </p>
                    <div className="flex justify-end mt-2">
                      <Link href="/profile/3">
                        <Button size="sm" variant="outline">
                          View Profile
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Ananya Reddy" />
                    <AvatarFallback>AR</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Ananya Reddy</h3>
                      <Badge className="bg-green-600">90% Match</Badge>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline">Athletics</Badge>
                      <Badge variant="outline">100m Sprint</Badge>
                      <Badge variant="outline">U15</Badge>
                    </div>
                    <p className="text-sm">District record holder in 100m sprint. Looking for advanced training.</p>
                    <div className="flex justify-end mt-2">
                      <Link href="/profile/4">
                        <Button size="sm" variant="outline">
                          View Profile
                        </Button>
                      </Link>
                    </div>
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
              <CardDescription>Tournaments, trials and coaching sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="min-w-[60px]">
                    <div className="text-center rounded-md border p-2">
                      <p className="text-xs text-muted-foreground">APR</p>
                      <p className="text-xl font-bold">20</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Talent Scouting Camp</h3>
                    <p className="text-sm text-muted-foreground">Delhi Sports Complex</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge className="bg-green-600">Organizer</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="min-w-[60px]">
                    <div className="text-center rounded-md border p-2">
                      <p className="text-xs text-muted-foreground">MAY</p>
                      <p className="text-xl font-bold">10</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">National Youth Championship</h3>
                    <p className="text-sm text-muted-foreground">Mumbai Stadium</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">Guest Coach</Badge>
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
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Rahul Sharma" />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p>
                      <span className="font-medium">Rahul Sharma</span>{" "}
                      <span className="text-muted-foreground">won the district championship</span>
                    </p>
                    <p className="text-sm">Just won the district championship! 🏆 Hard work pays off.</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Coach Priya" />
                    <AvatarFallback>CP</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p>
                      <span className="font-medium">Coach Priya</span>{" "}
                      <span className="text-muted-foreground">posted about training techniques</span>
                    </p>
                    <p className="text-sm">New training techniques for young athletes. Check out my latest article!</p>
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

