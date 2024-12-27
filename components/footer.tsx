import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Inclusive Education</h2>
            <p>Empowering Inclusive Education for All</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/courses" className="hover:underline">Courses</Link></li>
              <li><Link href="/teaching" className="hover:underline">Teaching</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="flex flex-col space-y-2">
              <Input type="email" placeholder="Your email" className="bg-primary-foreground text-primary" />
              <Button type="submit" variant="secondary">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10">
          <div className="flex justify-between items-center">
            <p>&copy; 2023 Inclusive Education. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="Twitter"><Twitter /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

