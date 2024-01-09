import React from 'react'
import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/counter'

function Main() {
  const { t } = useTranslation('main')

  return (
    <div>
      <Counter />
      {t('Main page')}
    </div>
  )
}

export default Main
