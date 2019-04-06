import React from 'react'
import ErrorBoundary from '../../shared/components/ErrorBoundary'
import '../../shared/styles/main.css'
import '../styles/local.css'

export default function App (props) {
  return (
    <ErrorBoundary>
      <div className="grid-container">
        <div className='header-section header-bg'><h1>Hello World from Currency App</h1></div>
        <div className='sidebar-section sidebar-bg'>sidebar</div>
        <div className='main-section main-bg'>main content</div>
        <div className='footer-section footer-bg'>footer</div>
      </div>
    </ErrorBoundary>
  )
}