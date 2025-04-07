import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Connect with Athletes, Coaches & Scouts across India
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                SporTea is a platform designed to connect Indian athletes, coaches, and scouts in a centralized and
                collaborative space.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/auth/register">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Get Started
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button size="lg" variant="outline">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://images.pexels.com/photos/27907317/pexels-photo-27907317/free-photo-of-cricket.jpeg"
              alt="SporTea Platform"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>For Athletes</CardTitle>
              <CardDescription>Build your sports profile and get discovered</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Create a comprehensive profile showcasing your achievements, upload performance videos, and connect with
                coaches and scouts.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>For Coaches</CardTitle>
              <CardDescription>Discover and mentor talented athletes</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Browse athlete profiles, filter by sport and achievements, and connect with promising talent across
                India.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Track Progress</CardTitle>
              <CardDescription>Log training and nutrition</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Keep track of your training sessions, nutrition intake, and overall progress to improve performance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

