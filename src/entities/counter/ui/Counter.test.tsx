import { ComponentRender } from 'shared/lib/tests'
import { screen } from '@testing-library/react'
import { userEvent } from '@storybook/testing-library'
import { Counter } from './Counter'

describe('Counter', () => {
  test('renders Counter component', () => {
    ComponentRender(
      <Counter />,
      { initialState: { counter: { value: 10 } } },
    )
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })

  test('increment', () => {
    ComponentRender(
      <Counter />,
      { initialState: { counter: { value: 10 } } },
    )
    const incrementButton = screen.getByTestId('increment-btn')

    userEvent.click(incrementButton)

    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })

  test('decrement', () => {
    ComponentRender(
      <Counter />,
      { initialState: { counter: { value: 10 } } },
    )
    const decrementButton = screen.getByTestId('decrement-btn')

    userEvent.click(decrementButton)

    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
})
