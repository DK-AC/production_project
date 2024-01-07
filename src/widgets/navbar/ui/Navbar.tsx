import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/modal/ui/Modal'
import { Button, ButtonTheme } from 'shared/ui/button/Button'
import cls from './Navbar.module.scss'

export function Navbar() {
  const { t } = useTranslation()

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prevState) => !prevState)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [])}>
      <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
        {t('login')}
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Dolor doloremque facere libero magni necessitatibus nobis numquam rem
        rerum sequi velit.
      </Modal>
    </div>
  )
}
