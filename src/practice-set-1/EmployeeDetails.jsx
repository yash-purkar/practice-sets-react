import React from 'react'

export const EmployeeDetails = ({ employeeData }) => {
  const isOrangeBg = (level) => level === 2 ? "orange" : "";
  return (
    <>
      <h1>Employee Details</h1>
      <ul>
        {
          employeeData.map(({ name, level, dept, designation, salary }) => <li style={{ backgroundColor: isOrangeBg(level) }}>
            Name: {name}, Level: {level}, Dept: {dept}, Designation: {designation}, Salary: {salary}
          </li>)
        }
      </ul>
    </>
  )
}
