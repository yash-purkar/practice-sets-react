export const EmployeeCard = ({ personDetails }) => {
  const { name, designation, workExperience } = personDetails;
  return (
    <>
      <h1>Name: {name}</h1>
      <p><span style={{ color: "green" }}>Designation</span>: {designation}</p>
      <p><span style={{ color: "blue" }}>workExperience</span>: {workExperience}</p>
    </>
  )
}