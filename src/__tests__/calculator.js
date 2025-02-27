import React from 'react'
import {render, fireEvent} from 'calculator-test-utils'
import {screen} from '@testing-library/react'
import Calculator from '../calculator'

test('the clear button switches from AC to C when there is an entry', () => {
  render(<Calculator />)
  const clearButton = screen.getByText('AC')

  fireEvent.click(screen.getByText(/3/))
  expect(clearButton).toHaveTextContent('C')

  fireEvent.click(clearButton)
  expect(clearButton).toHaveTextContent('AC')
})
