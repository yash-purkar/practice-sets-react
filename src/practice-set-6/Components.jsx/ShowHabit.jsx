import React from 'react'

export const ShowHabit = ({ habitData }) => {
  return (
    <>
      <h2>Habit Tracker</h2>
      <ul>

        {
          habitData.map(({ title, desc, daysFollowed, daysSkipped }, i) => {
            return (
              <li key={i}>
                <div><h3>{title}: </h3>
                  <p>{desc}</p>
                </div>

                <div><strong>Days Followed:</strong> {daysFollowed}</div>
                <div><strong>Days Skipped:</strong> {daysSkipped}</div>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}
