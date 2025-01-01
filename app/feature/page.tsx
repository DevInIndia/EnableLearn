'use client'

import { useState } from 'react'
import { FileUpload } from '@/components/file-upload'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { convertToBraille } from './actions'
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from 'lucide-react'

export default function Home() {
  const [file, setFile] = useState<File | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const { toast } = useToast()

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile)
  }

  const handleConvert = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a PDF file to convert.",
        variant: "destructive",
      })
      return
    }

    setIsConverting(true)
    const formData = new FormData()
    formData.append('file', file)

    try {
      const result = await convertToBraille(formData)
      if (result.success) {
        toast({
          title: "Conversion successful",
          description: `Your file has been converted to ${result.fileName}`,
        })
      } else {
        throw new Error(result.error || 'Conversion failed')
      }
    } catch (error) {
      toast({
        title: "Conversion failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      })
    } finally {
      setIsConverting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>PDF to Braille Converter</CardTitle>
          <CardDescription>Upload a PDF file to convert it to Braille</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FileUpload onFileSelect={handleFileSelect} />
          <div className="flex justify-center">
            
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleConvert} disabled={!file || isConverting} className="w-full">
            {isConverting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Converting...
              </>
            ) : (
              'Convert to Braille'
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

