import { useState } from "react"

export const User = ({ userData: { name, age, gender, email, occupation } }) => {
  const [userName, setUserName] = useState(name)
  // console.log(name, "JS")
  return (
    <>
      <div><span>Name:</span> {userName}</div>
      <div><span>Age:</span> {age}</div>
      <div><span>Gender:</span> {gender}</div>
      <div><span>Email:</span> {email}</div>
      <div><span>Occupation:</span> {occupation}</div>
      <br />
      <button onClick={() => setUserName("Emily")}>Update Name</button>
    </>
  )
}