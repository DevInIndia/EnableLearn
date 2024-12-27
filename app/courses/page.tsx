'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Filter } from 'lucide-react'

// Mock data for courses
const coursesData = [
  { id: 1, title: 'Introduction to Web Accessibility', type: 'video', disability: 'visual', level: 'Beginner', instructor: 'Jane Doe', rating: 4.5 },
  { id: 2, title: 'Sign Language Basics', type: 'video', disability: 'hearing', level: 'Beginner', instructor: 'John Smith', rating: 4.8 },
  { id: 3, title: 'Cognitive Accessibility in UX Design', type: 'text', disability: 'cognitive', level: 'Intermediate', instructor: 'Alice Johnson', rating: 4.2 },
  { id: 4, title: 'Adaptive Physical Education', type: 'video', disability: 'physical', level: 'Advanced', instructor: 'Bob Williams', rating: 4.6 },
  { id: 5, title: 'Assistive Technology for Education', type: 'audio', disability: 'multiple', level: 'Intermediate', instructor: 'Charlie Brown', rating: 4.3 },
]

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilters, setActiveFilters] = useState({
    courseType: 'all',
    disabilityType: 'all',
    difficultyLevel: 'all'
  })
  const [sortBy, setSortBy] = useState('popularity')

  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prev => ({ ...prev, [filterType]: value }))
  }

  const filteredCourses = coursesData.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeFilters.courseType === 'all' || course.type === activeFilters.courseType) &&
    (activeFilters.disabilityType === 'all' || course.disability === activeFilters.disabilityType) &&
    (activeFilters.difficultyLevel === 'all' || course.level === activeFilters.difficultyLevel)
  ).sort((a, b) => {
    if (sortBy === 'popularity') return b.rating - a.rating
    // Add more sorting options as needed
    return 0
  })

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Courses</h1>

      <div className="mb-6">
        <div className="flex gap-2">
          <div className="relative flex-grow">
            <Input
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute right-0 top-0 h-full"
                >
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filter courses</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h2 className="font-semibold">Filters</h2>
                  <div>
                    <h3 className="text-sm font-medium mb-2">Course Type</h3>
                    <Select onValueChange={(value) => handleFilterChange('courseType', value)} defaultValue={activeFilters.courseType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Course Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="video">Video</SelectItem>
                        <SelectItem value="text">Text</SelectItem>
                        <SelectItem value="audio">Audio</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2">Disability Type</h3>
                    <Select onValueChange={(value) => handleFilterChange('disabilityType', value)} defaultValue={activeFilters.disabilityType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Disability Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="visual">Visual</SelectItem>
                        <SelectItem value="hearing">Hearing</SelectItem>
                        <SelectItem value="cognitive">Cognitive</SelectItem>
                        <SelectItem value="physical">Physical</SelectItem>
                        <SelectItem value="multiple">Multiple</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2">Difficulty Level</h3>
                    <Select onValueChange={(value) => handleFilterChange('difficultyLevel', value)} defaultValue={activeFilters.difficultyLevel}>
                      <SelectTrigger>
                        <SelectValue placeholder="Difficulty Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Levels</SelectItem>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <Select onValueChange={setSortBy} defaultValue={sortBy}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Sort by: Popularity</SelectItem>
              <SelectItem value="date">Sort by: Date Added</SelectItem>
              <SelectItem value="rating">Sort by: Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.instructor}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Type: {course.type}</p>
              <p>Disability Focus: {course.disability}</p>
              <p>Level: {course.level}</p>
              <p>Rating: {course.rating}/5</p>
            </CardContent>
            <CardFooter>
              <Button>Enroll Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

