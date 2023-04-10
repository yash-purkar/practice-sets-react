export const User = ({ userData: { name, age, gender, email, occupation }, setUserData }) => {

  return (
    <>
      <div><span>Name:</span> {name}</div>
      <div><span>Age:</span> {age}</div>
      <div><span>Gender:</span> {gender}</div>
      <div><span>Email:</span> {email}</div>
      <div><span>Occupation:</span> {occupation}</div>
      <br />
      <button onClick={() => setUserData((prevData) => ({ ...prevData, name: "Emily" }))}>Update Name</button>
    </>
  )
}