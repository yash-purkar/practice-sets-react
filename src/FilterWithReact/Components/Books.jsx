import React, { useState } from 'react'

export const Books = ({ books }) => {
  const [inputYear, setInputYear] = useState('');

  const yearChangeHandler = (e) => setInputYear(e.target.value)

  const filteredBooks = books.filter(({ publishYear }) => inputYear <= publishYear);
  return (
    <div>
      <ul>
        <input type="number" onChange={yearChangeHandler} maxLength="4" />
        {
          filteredBooks.map(({ title, publishYear }) => <li key={title}>Title: ${title}  (Publish Year: ${publishYear})</li>)
        }
      </ul>
    </div>
  )
}
