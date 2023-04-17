import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { EmailApp } from './Set9'
import { EmailContextProvider } from './Q1/Contexts/EmailContext'

export const Questions = () => {
  return (
    <ol>
      <li>
        <Router>
          <EmailContextProvider>
            <EmailApp />
          </EmailContextProvider>
        </Router>
      </li>
    </ol>
  )
}
