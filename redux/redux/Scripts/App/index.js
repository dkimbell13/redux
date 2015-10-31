import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './components/app'

render(
  <Root />,
  document.getElementById('root')
)