import React, { useState } from 'react'

export const Employees = ({ employees }) => {
  const [data, setInputData] = useState(employees);

  const changeHandler = (event) => {
    const inputSalary = event.target.value;
    const newEmployees = employees.filter(({ salary }) => salary >= inputSalary);
    setInputData(newEmployees);
  }

  return (
    <div>
      <input type="number" onChange={changeHandler} />
      <ul>
        {
          data.map(({ name, salary }, index) => {
            return (
              <li key={index}>Name: {name}  (Salary: {salary})</li>
            )
          })
        }
      </ul>
    </div>
  )
}
