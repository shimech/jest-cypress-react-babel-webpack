import PropTypes from 'prop-types'
import {ThemeProvider} from 'emotion-theming'
import {dark} from '../src/themes'
import {render as rtlRender} from '@testing-library/react'

function render(ui, options) {
  return rtlRender(ui, {...options, wrapper: Wrapper})
}

function Wrapper({children}) {
  return <ThemeProvider theme={dark}>{children}</ThemeProvider>
}
Wrapper.propTypes = {
  children: PropTypes.node,
}

export * from '@testing-library/react'
export {render}
