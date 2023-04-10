import React, { useState } from 'react'

export const ShowProfile = ({ profileData: { name, age, gender, email, occupation, followers, followedBy }, setProfileData }) => {
  const [isDisable, setIsDisable] = useState(false)

  const handleFollowClick = () => {
    setProfileData((prevData) => ({ ...prevData, followers: prevData.followers + 1 }));
    setIsDisable(true)
  }
  return (
    <>
      <h2>{name}</h2>
      <div><span>Age: </span>{age}</div>
      <div><span>Gender: </span>{gender}</div>
      <div><span>Email: </span>{email}</div>
      <div><span>Occupation: </span>{occupation}</div>
      <div><span>Followers: </span>{followers}</div>
      <div><span>Followed By: </span>{followedBy}</div><br />
      <button onClick={handleFollowClick} disabled={isDisable}>Follow {name}</button>
    </>
  )
}
