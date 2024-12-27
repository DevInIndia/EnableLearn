'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
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
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How can I enroll in a course?</AccordionTrigger>
              <AccordionContent>
                To enroll in a course, simply navigate to the Courses page, select the course you're interested in, and click the "Enroll Now" button. You'll be guided through the enrollment process from there.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What accessibility features do you offer?</AccordionTrigger>
              <AccordionContent>
                We offer a range of accessibility features including text-to-speech, sign language videos, high contrast mode, and keyboard navigation. You can customize these features in your account settings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How can I become an instructor?</AccordionTrigger>
              <AccordionContent>
                To become an instructor, visit our Teaching page and fill out the application form. We'll review your application and get back to you with next steps.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you offer financial aid?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer financial aid for eligible students. Please contact our support team for more information on how to apply for financial assistance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Our Location</h2>
        <Card>
          <CardContent className="p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215171642163!2d-73.98823492426385!3d40.75790563560563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1685123456789!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

