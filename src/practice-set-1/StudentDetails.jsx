export const StudentDetails = ({ studentData }) => {
  const { name, english, maths, computers } = studentData;
  const totalMarks = english + maths + computers;
  const grade = totalMarks > 225 ? "A" : totalMarks > 180 ? "B" : totalMarks > 150 ? "C" : "D";
  return (
    <>
      <h1>Student Details</h1>
      <h3>Name: {name}</h3>
      <h3>English: {maths}</h3>
      <h3>maths: {computers}</h3>
      <h3>Total Marks: {totalMarks}</h3>
      <h3>Grade: {grade}</h3>
    </>
  )
}