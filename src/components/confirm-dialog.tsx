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
  showClose?: boolean
  closableOnOverlay?: boolean
  cancelText?: string
  confirmText?: string
  confirmDisable?: boolean
  onCancel?: () => void
  onConfirm?: () => void
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  title,
  description,
  showClose = false,
  closableOnOverlay = false,
  cancelText,
  confirmText,
  confirmDisable = false,
  onCancel,
  onConfirm,
  onOpenChange,
  children
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogContent
          className="sm:max-w-[425px]"
          showClose={showClose}
          onPointerDownOutside={
            closableOnOverlay
              ? undefined
              : e => {
                  e.preventDefault()
                }
          }
        >
          {title || description ? (
            <DialogHeader>
              {title ? <DialogTitle>{title}</DialogTitle> : null}
              {description ? (
                <DialogDescription>{description}</DialogDescription>
              ) : null}
            </DialogHeader>
          ) : null}

          {children}

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
                <Button
                  type="submit"
                  onClick={onConfirm}
                  disabled={confirmDisable}
                >
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
