import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Books, EmailApp, Foody, VideoLibrary } from './Set9'
import { EmailContextProvider } from './Q1/Contexts/EmailContext'
import { BooksContextProvider } from './Q2/Contexts-Q2/BooksContext'
import { FoodContextProvider } from './Q3/Contexts-Q3/FoodContext'
import { VideosContextProvider } from './Q4/Contexts-Q4/VideosContext'

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
      <li>
        {/* <Router>
          <VideosContextProvider>
            <VideoLibrary />
          </VideosContextProvider>
        </Router> */}
      </li>
    </ol>
  )
}
