import React, { useState } from 'react'

export const Events = ({ eventsData }) => {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const handleChange = (e) => {
    const event = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedEvents([...selectedEvents, event]);
    }
    else {
      setSelectedEvents(selectedEvents.filter(e => e !== event))
    }

  }

  const filteredEvents = eventsData.filter(({ eventType }) => selectedEvents.includes(eventType));

  const eventType = ["music", "sports", "theater"];
  return (
    <>
      {
        eventType.map(type => {
          return (
            <label>
              <input type="checkbox" value={type} checked={selectedEvents.includes(type)} onChange={handleChange} />
              {type}
            </label>
          )
        })
      }
      <ul>
        {
          filteredEvents.map(({ name, date, location, ticketPrice, eventType }) => {
            return (
              <li>
                <div>Name: {name}</div>
                <div>Date: {date}</div>
                <div>Location: {location}</div>
                <div>Ticket Price: {ticketPrice}</div>
                <div>Event Type: {eventType}</div>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}
