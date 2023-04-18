import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Books, EmailApp } from './Set9'
import { EmailContextProvider } from './Q1/Contexts/EmailContext'
import { BooksContextProvider } from './Q2/Contexts-Q2/BooksContext'

export const Questions = () => {
  return (
    <ol style={{ listStyle: "none" }}>
      <li>
        {/* <Router>
          <EmailContextProvider>
            <EmailApp />
          </EmailContextProvider>
        </Router> */}
      </li>

      <li>
        <Router>
          <BooksContextProvider >
            <Books />
          </BooksContextProvider>
        </Router>
      </li>
    </ol>
  )
}
