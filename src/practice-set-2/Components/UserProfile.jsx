import React from 'react'

export const UserProfile = ({ user }) => {
  const { name, age, email } = user;
  return (
    <div>
      <p>Name: {name} {" "} age: {age} {" "} email: {email}</p>
    </div>
  )
}
