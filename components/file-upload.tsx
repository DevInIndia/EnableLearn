'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload } from 'lucide-react'

interface FileUploadProps {
  onFileSelect: (file: File) => void
}

export function FileUpload({ onFileSelect }: FileUploadProps) {
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
      onFileSelect(file)
    }
  }

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="pdf-upload">Upload PDF</Label>
      <div className="flex items-center gap-2">
        <Input
          id="pdf-upload"
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleFileChange}
        />
        <Button asChild>
          <Label htmlFor="pdf-upload" className="cursor-pointer">
            <Upload className="mr-2 h-4 w-4" />
            Choose File
          </Label>
        </Button>
        {fileName && <span className="text-sm">{fileName}</span>}
      </div>
    </div>
  )
}

