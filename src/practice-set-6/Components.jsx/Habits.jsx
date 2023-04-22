import React, { useState } from 'react'

export const Habits = ({ habitsData }) => {
  const [showArchived, setShowArchived] = useState(false)

  const filteredHabits = showArchived ? habitsData.filter(({ archived }) => archived) : habitsData.filter(({ archived }) => !archived)

  return (
    <>
      <h1>{showArchived ? "Archived" : "Unarchived"}</h1>
      {
        filteredHabits.map(({ title, desc, daysFollowed, daysSkipped, archived }) => {
          return (
            <div key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
              <p><strong>Days Followed: </strong>{daysFollowed}</p>
              <p><strong>Days Skipped: </strong>{daysSkipped}</p>
              <hr />
            </div>
          )
        })
      }
      <button onClick={() => setShowArchived(!showArchived)}>{showArchived ? "Show Unarchived" : "Show Archived"}</button>
    </>
  )
}



/*import React, { useState } from 'react'

export const Habits = ({ habitsData, setHabitsData }) => {
  const [unarchived, setUnarchived] = useState(true)

  const handleClick = () => {
    const newData = habitsData.map((el) => ({ ...el, archived: !el.archived }))
    setHabitsData(newData)
    setUnarchived(!unarchived)
  }

  return (
    <>
      <h1>{unarchived ? "Unarchived" : "Archived"}</h1>
      {
        habitsData.map(({ title, desc, daysFollowed, daysSkipped, archived }) => {
          return (
            <div key={title}>
              {
                !archived && <div>
                  <h3>{title}</h3>
                  <div>{desc}</div>
                  <p><strong>Days Followed: </strong>{daysFollowed}</p>
                  <p><strong>Days Skipped: </strong>{daysSkipped}</p>
                  <hr />
                </div>
              }
            </div>
          )
        })
      }
      <button onClick={handleClick}>{unarchived ? "Show archived" : "Hide Archived"}</button>
    </>
  )
}
*/