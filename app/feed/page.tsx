"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Heart, MessageCircle, Share2, Image } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"

// Mock data for posts
const POSTS = [
  {
    id: "1",
    author: {
      id: "1",
      name: "Rahul Sharma",
      role: "athlete",
      sport: "Cricket",
      image: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Just won the district championship! 🏆 Hard work pays off. Thanks to my coach and teammates for the support.",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 5,
    shares: 2,
    hasImage: true,
    imageUrl: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "2",
    author: {
      id: "2",
      name: "Coach Vikram",
      role: "coach",
      sport: "Football",
      image: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Proud of our team's performance in the state tournament. Special mention to @arjun for scoring the winning goal! Looking forward to the nationals next month.",
    timestamp: "5 hours ago",
    likes: 42,
    comments: 8,
    shares: 3,
    hasImage: false,
  },
  {
    id: "3",
    author: {
      id: "3",
      name: "Priya Patel",
      role: "athlete",
      sport: "Badminton",
      image: "/placeholder.svg?height=40&width=40",
    },
    content: "Training session today was intense! Working on my backhand shots. #Badminton #Training",
    timestamp: "Yesterday",
    likes: 18,
    comments: 3,
    shares: 0,
    hasImage: true,
    imageUrl: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "4",
    author: {
      id: "4",
      name: "Sports Academy Mumbai",
      role: "organization",
      sport: "Multiple",
      image: "/placeholder.svg?height=40&width=40",
    },
    content:
      "Announcing our summer camp for young athletes! Join us for a 2-week intensive training program across multiple sports. Limited spots available. Register now!",
    timestamp: "2 days ago",
    likes: 56,
    comments: 12,
    shares: 24,
    hasImage: false,
  },
]

export default function FeedPage() {
  const [newPost, setNewPost] = useState("")
  const [isPosting, setIsPosting] = useState(false)
  const { toast } = useToast()

  const handlePostSubmit = async () => {
    if (!newPost.trim()) return

    setIsPosting(true)
    try {
      // In a real app, this would be an API call to create a post
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "Post created",
        description: "Your post has been published to the feed.",
      })
      setNewPost("")
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "There was an error creating your post. Please try again.",
      })
    } finally {
      setIsPosting(false)
    }
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        <Card>
          <CardHeader className="p-4">
            <div className="flex gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Your profile" />
                <AvatarFallback>YP</AvatarFallback>
              </Avatar>
              <Textarea
                placeholder="Share an update or achievement..."
                className="min-h-[80px] resize-none"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardFooter className="p-4 pt-0 flex justify-between">
            <Button variant="outline" size="sm">
              <Image className="mr-2 h-4 w-4" />
              Add Photo
            </Button>
            <Button
              className="bg-green-600 hover:bg-green-700"
              onClick={handlePostSubmit}
              disabled={isPosting || !newPost.trim()}
            >
              {isPosting ? "Posting..." : "Post Update"}
            </Button>
          </CardFooter>
        </Card>

        {POSTS.map((post) => (
          <Card key={post.id}>
            <CardHeader className="p-4">
              <div className="flex items-start gap-3">
                <Link href={`/profile/${post.author.id}`}>
                  <Avatar>
                    <AvatarImage src={post.author.image} alt={post.author.name} />
                    <AvatarFallback>
                      {post.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </Link>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Link href={`/profile/${post.author.id}`} className="font-medium hover:underline">
                      {post.author.name}
                    </Link>
                    <Badge variant="outline" className="text-xs">
                      {post.author.sport}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="whitespace-pre-line">{post.content}</p>
              {post.hasImage && (
                <div className="mt-3 rounded-md overflow-hidden">
                  <img
                    src={post.imageUrl || "/placeholder.svg"}
                    alt="Post attachment"
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    {post.likes} likes • {post.comments} comments
                  </div>
                </div>
                <Separator className="my-3" />
                <div className="flex justify-between">
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Heart className="mr-2 h-4 w-4" />
                    Like
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Comment
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

