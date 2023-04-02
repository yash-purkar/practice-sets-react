import React from 'react'

export const Students = ({ studentData }) => {
  const mean = studentData.reduce((acc, { marks }) => acc + marks, 0) / studentData.length;
  console.log(mean)
  return (
    <h1>{mean > 80 ? "Certification Approved" : "Certification Not Approved"}</h1>
  )
}
