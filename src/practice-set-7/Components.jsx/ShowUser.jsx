import React, { useState } from 'react'

export const ShowUser = ({ userData: { name, email, phone, address: { street, suite, city, zipcode } } }) => {
  const [showAddress, setShowAddress] = useState(false);
  return (
    <div>
      <h1>User</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <button onClick={() => setShowAddress(!showAddress)}>{
        showAddress ? "Hide Address" : "Show Address"}</button>
      {
        showAddress && <div>
          <p>{street}</p>
          <p>{suite}</p>
          <p>{city}</p>
          <p>{zipcode}</p>
        </div>
      }
    </div>
  )
}
