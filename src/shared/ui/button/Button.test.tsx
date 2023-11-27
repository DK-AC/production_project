import { render, screen } from '@testing-library/react'
import { Button } from './Button'
import { Theme } from '../../../app/providers/themeProvider/lib/ThemeContext'

describe('Button', () => {
  test('Button is render', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('Button with className', () => {
    render(<Button theme={Theme.CLEAR}>Test</Button>)
    expect(screen.getByText('Test')).toHaveClass('clear')
  })
})
