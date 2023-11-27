import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  test('renders Sidebar component', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggles collapsed state on button click', () => {
    renderWithTranslation(<Sidebar />)

    const toggleButton = screen.getByTestId('toggle-button')

    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')

    fireEvent.click(toggleButton)

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
