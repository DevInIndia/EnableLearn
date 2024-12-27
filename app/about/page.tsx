import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function About() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg mb-4">
          At Inclusive Education, we are committed to breaking down barriers in education and ensuring that everyone, regardless of their abilities, has access to quality learning resources. Our platform is designed to empower learners of all backgrounds and abilities, aligning with the United Nations Sustainable Development Goals (SDGs), particularly SDG 4 (Quality Education) and SDG 10 (Reduced Inequalities).
        </p>
        <p className="text-lg">
          We believe that education is a fundamental right and a powerful tool for personal growth and societal progress. By leveraging technology and innovative teaching methods, we aim to create an inclusive learning environment that caters to diverse needs and learning styles.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              Inclusive Education was founded in 2020 by a group of educators, technologists, and accessibility experts who recognized the need for a more inclusive approach to online learning. What started as a small project has grown into a global platform, serving thousands of learners across the world.
            </p>
            <p className="text-lg">
              Our journey has been marked by continuous innovation, collaboration with disability rights organizations, and feedback from our diverse community of learners and educators. We're proud of how far we've come, but we know there's still much work to be done in making education truly accessible to all.
            </p>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src="/placeholder.svg"
              alt="Our journey illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((member) => (
            <Card key={member}>
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 relative">
                  <Image
                    src="/placeholder.svg"
                    alt={`Team member ${member}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <CardTitle className="text-center">Team Member {member}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">Brief bio about team member {member} and their role in the organization.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

