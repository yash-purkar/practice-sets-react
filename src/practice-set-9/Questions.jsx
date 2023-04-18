import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Books, EmailApp, Foody } from './Set9'
import { EmailContextProvider } from './Q1/Contexts/EmailContext'
import { BooksContextProvider } from './Q2/Contexts-Q2/BooksContext'
import { FoodContextProvider } from './Q3/Contexts-Q3/FoodContext'

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
        {/* <Router>
          <BooksContextProvider >
            <Books />
          </BooksContextProvider>
        </Router> */}
      </li>
      <li>
        <Router>
          <FoodContextProvider>
            <Foody />
          </FoodContextProvider>
        </Router>
      </li>
    </ol>
  )
}
