import React from 'react'

export const MenuCard = ({ id, name, description, price, image, is_vegetarian, is_spicy, delivery_time }) => {
  return (
    <li style={styles}>
      <img src={image} alt="img" style={{ borderRadius: "1rem" }} />
      <p>Name: {name}</p>
      <p style={{ width: "70%" }}><strong>Description</strong>: {description}</p>
      <p>Price: {price}</p>
      <p>Delivery Time: {delivery_time}Min</p>
    </li>
  )
}

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "300px",
  border: "1px solid red",
  padding: "0.5rem",
  borderRadius: "0.5rem"
}