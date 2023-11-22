import React from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/button/Button'
import cls from './PageError.module.scss'

type PageErrorProps = {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  const handleReloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  }

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{t('unforeseen error')}</p>
      <Button onClick={handleReloadPage}>
        {t('reload page')}
      </Button>
    </div>
  )
}
