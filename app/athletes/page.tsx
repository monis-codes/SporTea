"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Search } from "lucide-react"

// Mock data for athletes
const ATHLETES = [
  {
    id: "1",
    name: "Rahul Sharma",
    sport: "Cricket",
    specialization: "Fast Bowler",
    ageGroup: "Under 19",
    location: "Mumbai, Maharashtra",
    achievements: ["State Level Champion", "Best Bowler Award"],
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    name: "Priya Patel",
    sport: "Badminton",
    specialization: "Singles",
    ageGroup: "Under 17",
    location: "Hyderabad, Telangana",
    achievements: ["National Junior Champion", "District Gold Medalist"],
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    name: "Arjun Singh",
    sport: "Football",
    specialization: "Midfielder",
    ageGroup: "Under 23",
    location: "Delhi, NCR",
    achievements: ["University Team Captain", "State Team Player"],
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    name: "Ananya Reddy",
    sport: "Athletics",
    specialization: "100m Sprint",
    ageGroup: "Under 15",
    location: "Bangalore, Karnataka",
    achievements: ["School Champion", "District Record Holder"],
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "5",
    name: "Vikram Kohli",
    sport: "Hockey",
    specialization: "Forward",
    ageGroup: "Senior",
    location: "Chandigarh, Punjab",
    achievements: ["State Team Player", "College Captain"],
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "6",
    name: "Meera Joshi",
    sport: "Kabaddi",
    specialization: "Raider",
    ageGroup: "Under 19",
    location: "Pune, Maharashtra",
    achievements: ["District Champion", "Best Raider Award"],
    image: "/placeholder.svg?height=40&width=40",
  },
]

export default function AthletesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sportFilter, setSportFilter] = useState("")
  const [ageGroupFilter, setAgeGroupFilter] = useState("")

  // Filter athletes based on search term and filters
  const filteredAthletes = ATHLETES.filter((athlete) => {
    const matchesSearch =
      athlete.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      athlete.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSport = sportFilter ? athlete.sport === sportFilter : true
    const matchesAgeGroup = ageGroupFilter ? athlete.ageGroup === ageGroupFilter : true

    return matchesSearch && matchesSport && matchesAgeGroup
  })

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Discover Athletes</h1>
          <p className="text-muted-foreground">Find and connect with talented athletes across India</p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or specialization..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <Select value={sportFilter} onValueChange={setSportFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Sport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sports</SelectItem>
                <SelectItem value="Cricket">Cricket</SelectItem>
                <SelectItem value="Football">Football</SelectItem>
                <SelectItem value="Hockey">Hockey</SelectItem>
                <SelectItem value="Badminton">Badminton</SelectItem>
                <SelectItem value="Athletics">Athletics</SelectItem>
                <SelectItem value="Kabaddi">Kabaddi</SelectItem>
              </SelectContent>
            </Select>

            <Select value={ageGroupFilter} onValueChange={setAgeGroupFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Age Group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Age Groups</SelectItem>
                <SelectItem value="Under 15">Under 15</SelectItem>
                <SelectItem value="Under 17">Under 17</SelectItem>
                <SelectItem value="Under 19">Under 19</SelectItem>
                <SelectItem value="Under 23">Under 23</SelectItem>
                <SelectItem value="Senior">Senior</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAthletes.map((athlete) => (
            <Card key={athlete.id} className="overflow-hidden">
              <CardHeader className="p-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={athlete.image} alt={athlete.name} />
                    <AvatarFallback>
                      {athlete.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{athlete.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{athlete.specialization}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-green-600">{athlete.sport}</Badge>
                  <Badge variant="outline">{athlete.ageGroup}</Badge>
                  <Badge variant="outline">{athlete.location}</Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Achievements:</p>
                  <ul className="text-sm text-muted-foreground">
                    {athlete.achievements.map((achievement, index) => (
                      <li key={index}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={`/profile/${athlete.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    View Profile
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

