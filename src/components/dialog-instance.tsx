import React from 'react'
import { createRoot } from 'react-dom/client'
import { useTranslation } from 'react-i18next'
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

  /**
   * confirm 确认框
   */
  confirm(options: ConfirmOptions = {}) {
    const {
      title,
      content = '',
      onConfirm,
      onCancel,
      confirmText,
      cancelText
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

    const ConfirmDialog = () => {
      const { t } = useTranslation('dialog')
      return (
        <Dialog open={true}>
          <DialogContent showClose={false} className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{title || t('confirm')}</DialogTitle>
              <DialogDescription>{content}</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={handleCancel}>
                {cancelText || t('cancelText')}
              </Button>
              <Button onClick={handleConfirm}>{confirmText || t('confirmText')}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    }

    this.root.render(<ConfirmDialog />)
  }

  /**
   * alert 提示框
   */
  alert(options: AlertOptions = {}) {
    const {
      title,
      content = '',
      onConfirm,
      confirmText
    } = options

    this.createContainer()

    const handleConfirm = () => {
      onConfirm?.()
      this.destroyContainer()
    }

    const AlertDialog = () => {
      const { t } = useTranslation('dialog')
      return (
        <Dialog open={true}>
          <DialogContent showClose={false} className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{title || t('alert')}</DialogTitle>
              <DialogDescription>{content}</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={handleConfirm}>{confirmText || t('confirmText')}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )
    }

    this.root.render(<AlertDialog />)
  }
}

const dialog = new DialogInstance()

export default dialog
