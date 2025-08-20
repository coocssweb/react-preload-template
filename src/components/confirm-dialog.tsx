import React from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogPortal
} from './ui/dialog'
import { Button } from './ui/button'

interface ConfirmDialogProps {
  open: boolean
  title?: string
  description?: string
  content?: React.ReactNode
  cancelText?: string
  confirmText?: string
  onCancel?: () => void
  onConfirm?: () => void
  onOpenChange?: (open: boolean) => void
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  title,
  description,
  content,
  cancelText,
  confirmText,
  onCancel,
  onConfirm,
  onOpenChange
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogContent className="sm:max-w-[425px]">
          {title || description ? (
            <DialogHeader>
              {title ? <DialogTitle>{title}</DialogTitle> : null}
              {description ? (
                <DialogDescription>{description}</DialogDescription>
              ) : null}
            </DialogHeader>
          ) : null}

          {content}

          {cancelText || confirmText ? (
            <DialogFooter>
              {cancelText ? (
                <DialogClose asChild>
                  <Button variant="outline" onClick={onCancel}>
                    {cancelText}
                  </Button>
                </DialogClose>
              ) : null}

              {confirmText ? (
                <Button type="submit" onClick={onConfirm}>
                  {confirmText}
                </Button>
              ) : null}
            </DialogFooter>
          ) : null}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}

export default ConfirmDialog
