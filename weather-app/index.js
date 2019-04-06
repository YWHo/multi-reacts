import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './state/store'
import App from './components/App'

const store = configureStore()

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})