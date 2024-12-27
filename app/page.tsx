import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Empowering Inclusive Education for All</h1>
        <p className="text-xl mb-8">Join our community and start learning today!</p>
        <Button asChild size="lg">
          <Link href="/courses">Explore Courses</Link>
        </Button>
      </section>

      {/* Featured Courses */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Courses</h2>
        <Carousel>
          <CarouselContent>
            {[1, 2, 3, 4, 5].map((item) => (
              <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/3">
                <Card>
                  <CardHeader>
                    <CardTitle>Course {item}</CardTitle>
                    <CardDescription>Course description goes here</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Course content preview...</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Accessibility Features */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Accessibility Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Text-to-Speech</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Convert text to speech for easier comprehension.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sign Language Videos</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access course content with sign language interpretation.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>High Contrast Mode</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Enhance visibility with our high contrast theme option.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">What Our Students Say</h2>
        <Carousel>
          <CarouselContent>
            {[1, 2, 3].map((item) => (
              <CarouselItem key={item}>
                <Card>
                  <CardContent className="p-6">
                    <p className="mb-4">"This platform has been a game-changer for my education. The accessibility features make learning so much easier!"</p>
                    <p className="font-bold">- Student {item}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  )
}

