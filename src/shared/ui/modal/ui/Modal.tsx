import React, {
  ReactNode, useCallback, useEffect, useRef, useState,
} from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui/portal/Portal'
import { useTheme } from 'app/providers/themeProvider'
import cls from './Modal.module.scss'

type Props = {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal = (props: Props) => {
  const {
    isOpen,
    children,
    className,
    onClose,
  } = props

  const [isClosing, setIsClosing] = useState(false)
  const timeRef = useRef<ReturnType<typeof setTimeout>>()
  const { theme } = useTheme()

  const closeHandle = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timeRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const onKeyDownHandle = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandle()
    }
  }, [closeHandle])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDownHandle)
    }

    return () => {
      clearTimeout(timeRef.current)
      window.removeEventListener('keydown', onKeyDownHandle)
    }
  }, [isOpen, onKeyDownHandle])

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  return (
    <Portal>
      <div
        className={classNames(cls.modal, mods, [className, theme])}
        onClick={closeHandle}
      >
        <div className={cls.overlay}>
          <div
            className={classNames(cls.content)}
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
