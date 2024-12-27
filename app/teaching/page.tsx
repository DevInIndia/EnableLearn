'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Teaching() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    expertise: '',
    experience: '',
    motivation: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    // Reset form or show success message
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Teach with Us</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Join Our Teaching Community</h2>
        <p className="text-lg mb-4">
          Are you passionate about inclusive education? Do you have expertise in teaching students with disabilities? Join our platform and make a difference in the lives of learners around the world.
        </p>
        <p className="text-lg mb-4">
          As an educator on our platform, you'll have the opportunity to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Share your knowledge and skills with a global audience</li>
          <li>Develop courses that cater to diverse learning needs</li>
          <li>Collaborate with other experts in inclusive education</li>
          <li>Earn revenue through our fair compensation model</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Benefits for Educators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Earn competitive compensation for your courses and reach a wider audience.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Community Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Join a network of like-minded educators and share best practices.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Customization Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access our suite of tools to create engaging and accessible course content.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Apply to Teach</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expertise" className="block text-sm font-medium text-gray-700">Area of Expertise</label>
            <Input
              type="text"
              id="expertise"
              name="expertise"
              value={formData.expertise}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Teaching Experience</label>
            <Textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="motivation" className="block text-sm font-medium text-gray-700">Why do you want to teach on our platform?</label>
            <Textarea
              id="motivation"
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit">Submit Application</Button>
        </form>
      </section>
    </div>
  )
}

