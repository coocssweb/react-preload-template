import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
} from './ui/dialog'
import { Button } from './ui/button'

interface ConfirmOptions {
  title?: string
  content?: string
  onConfirm?: () => void
  onCancel?: () => void
  confirmText?: string
  cancelText?: string
}

interface AlertOptions {
  title?: string
  content?: string
  onConfirm?: () => void
  confirmText?: string
}

class DialogInstance {
  private container: HTMLDivElement | null = null
  private root: any = null

  private createContainer() {
    if (!this.container) {
      this.container = document.createElement('div')
      document.body.appendChild(this.container)
      this.root = createRoot(this.container)
    }
  }

  private destroyContainer() {
    if (this.container && this.root) {
      this.root.unmount()
      document.body.removeChild(this.container)
      this.container = null
      this.root = null
    }
  }

  confirm(options: ConfirmOptions = {}) {
    const {
      title = '确认',
      content = '确定要执行此操作吗？',
      onConfirm,
      onCancel,
      confirmText = '确定',
      cancelText = '取消'
    } = options

    this.createContainer()

    const handleConfirm = () => {
      onConfirm?.()
      this.destroyContainer()
    }

    const handleCancel = () => {
      onCancel?.()
      this.destroyContainer()
    }

    const ConfirmDialog = () => (
      <Dialog open={true}>
        <DialogContent showClose={false} className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{content}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={handleCancel}>
              {cancelText}
            </Button>
            <Button onClick={handleConfirm}>{confirmText}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )

    this.root.render(<ConfirmDialog />)
  }

  alert(options: AlertOptions = {}) {
    const {
      title = '提示',
      content = '',
      onConfirm,
      confirmText = '确定'
    } = options

    this.createContainer()

    const handleConfirm = () => {
      onConfirm?.()
      this.destroyContainer()
    }

    const AlertDialog = () => (
      <Dialog open={true}>
        <DialogContent showClose={false} className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{content}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleConfirm}>{confirmText}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )

    this.root.render(<AlertDialog />)
  }
}

const dialog = new DialogInstance()

export default dialog
