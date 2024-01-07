import React from 'react'
import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation('about')
  return (
    <div>
      {t('About page')}
    </div>
  )
}

export default About
