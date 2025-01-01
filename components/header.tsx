'use client'

import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Moon, Sun, Laptop } from 'lucide-react'
import { useTheme } from 'next-themes'

const Header = () => {
  const { data: session, status } = useSession()
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent rendering until mounted to avoid hydration mismatch
  if (!mounted) return null

  return (
    <header className="bg-background text-foreground shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/">Enable Learn</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/courses" className="hover:text-primary">Courses</Link>
            <Link href="/teaching" className="hover:text-primary">Teaching</Link>
            <Link href="/contact" className="hover:text-primary">Contact Us</Link>
            <Link href="/feature" className="hover:text-primary">Features</Link>
          </div>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                  <Laptop className="mr-2 h-4 w-4" />
                  <span>System</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {status === 'authenticated' ? (
              <Button onClick={() => signOut()}>Sign Out</Button>
            ) : status === 'unauthenticated' ? (
              <Button onClick={() => signIn()}>Login/Sign Up</Button>
            ) : (
              <Button disabled>Loading...</Button>
            )}
          </div>
          <button
            className="md:hidden"
            onMouseEnter={() => setIsMenuOpen(true)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
        {isMenuOpen && (
          <div
            className="md:hidden mt-4 space-y-2"
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <Link href="/" className="block px-4 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-200 transform hover:translate-x-2">Home</Link>
            <Link href="/about" className="block px-4 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-200 transform hover:translate-x-2">About</Link>
            <Link href="/courses" className="block px-4 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-200 transform hover:translate-x-2">Courses</Link>
            <Link href="/teaching" className="block px-4 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-200 transform hover:translate-x-2">Teaching</Link>
            <Link href="/contact" className="block px-4 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-200 transform hover:translate-x-2">Contact Us</Link>
            <Link href="/feature" className="block px-4 py-2 rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-200 transform hover:translate-x-2">Features</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
