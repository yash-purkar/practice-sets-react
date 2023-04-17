import React, { useContext } from 'react'
import { Navbar } from '../Components-Q1/Navbar'
import { EmailContext } from '../Contexts/EmailContext'
export const Home = () => {
  const { emails } = useContext(EmailContext)
  return (
    <>
      {
        emails.length === 0 ? <h1>Loading....</h1> : <div>
          <h1>My Mail Box</h1>
          <Navbar />
        </div>
      }

    </>
  )
}
