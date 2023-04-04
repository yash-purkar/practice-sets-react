import React, { useState } from 'react'

export const JobPosting = ({ jobData }) => {
  const [selectedJobTypes, setSelectedJobTypes] = useState([]) //["full-time","part"]

  const checkHandler = (e) => {
    const type = e.target.value; //full-time
    const isChecked = e.target.checked; //false
    console.log(isChecked)

    if (isChecked) { //true
      setSelectedJobTypes([...selectedJobTypes, type])
      // ["full-time","part-time"]
    }
    else {
      const newArr = selectedJobTypes.filter(t => t !== type) //[parttime]
      setSelectedJobTypes(newArr);
      // "fulltime" !== fulltime =false
      //partime !==  fulltime True
    }
  }

  const filteredJobTypes = jobData.filter(({ type }) => selectedJobTypes.includes(type));
  //[parttime]




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
                  checked={selectedJobTypes.includes(type)} //[].include("Full-time") //true //fas
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
