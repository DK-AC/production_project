import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/button/Button'

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false)
  const { t } = useTranslation()

  const onThrow = () => setError(true)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <Button
      theme={ButtonTheme.OUTLINE}
      type="button"
      onClick={onThrow}
    >
      {t('throw error')}
    </Button>
  )
}
