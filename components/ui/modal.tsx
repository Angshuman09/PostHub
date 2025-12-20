import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'

interface ModalProps {
  children: React.ReactNode
  title: string
  description?: string
  isOpen: boolean
  onClose: () => void
  onSubmit?: () => void
  submitText?: string
  cancelText?: string
  showFooter?: boolean
  submitVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: string
  className?: string
}

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  description,
  isOpen,
  onClose,
  onSubmit,
  submitText = 'Submit',
  cancelText = 'Cancel',
  showFooter = true,
  submitVariant = "default",
  size,
  className = ''
}) => {
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`${size} ${className} bg-zinc-900 border-zinc-800 shadow-2xl`}>
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-white">{title}</DialogTitle>
          {description && (
            <DialogDescription className="text-zinc-400 text-sm">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="py-4">
          {children}
        </div>
        {showFooter && (
          <DialogFooter className="gap-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
            >
              {cancelText}
            </Button>
            {onSubmit && (
              <Button
                className="bg-violet-600 hover:bg-violet-500 text-white transition-colors shadow-lg shadow-violet-500/20"
                onClick={handleSubmit}
              >
                {submitText}
              </Button>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default Modal