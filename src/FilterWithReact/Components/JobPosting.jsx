import React, { useState } from 'react'

export const JobPosting = ({ jobData }) => {
  const [selectedJobTypes, setSelectedJobTypes] = useState([])

  const checkHandler = (e) => {
    const type = e.target.value;
    const isChecked = e.target.checked;
    console.log(isChecked)

    if (isChecked) {
      setSelectedJobTypes([...selectedJobTypes, type])
    }
    else {
      setSelectedJobTypes(selectedJobTypes.filter(t => t !== type));
    }
  }

  const filteredJobTypes = jobData.filter(({ type }) => selectedJobTypes.includes(type));





  const jobTypes = ["full-time", "part-time", "contract"];
  return (
    <div>
      {
        jobTypes.map((type, i) => {
          return (
            <>
              <label key={i}>
                <input type="checkbox"
                  value={type}
                  checked={selectedJobTypes.includes(type)}
                  onChange={checkHandler} />
                {type}
              </label>
            </>
          )
        })
      }
      <ul>
        {
          filteredJobTypes.map(({ company, jobTitle, type, location, salary }, i) => {
            return (
              <li key={i}>
                <div>Company Name: {company}</div>
                <div>jobTitle: {jobTitle}</div>
                <div>Type: {type}</div>
                <div>Location: {location}</div>
                <div>Salary: {salary}</div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
