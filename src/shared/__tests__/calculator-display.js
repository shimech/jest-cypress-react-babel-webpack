import CalculatorDisplay from '../calculator-display'
import {render} from '@testing-library/react'

test('renders', () => {
  const {container} = render(<CalculatorDisplay value="0" />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="css-lq9ahq-calculator-display--CalculatorDisplay"
    >
      <div
        class="autoScalingText"
        data-testid="total"
        style="transform: scale(1,1);"
      >
        0
      </div>
    </div>
  `)
})
