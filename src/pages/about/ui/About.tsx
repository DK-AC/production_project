import React from 'react'
import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/counter'

function About() {
  const { t } = useTranslation('about')
  return (
    <div>
      <Counter />
      {t('About page')}
    </div>
  )
}

export default About
