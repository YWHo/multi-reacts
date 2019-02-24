import React from 'react'
import ErrorBoundary from '../../../shared/ErrorBoundary'
import Hello from '../../../shared/Hello'

export default function App(props) {
  return (
    <ErrorBoundary>
      <Hello sender='Weather App' />
    </ErrorBoundary>
  )
}