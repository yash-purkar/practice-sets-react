import React from 'react'

export const Product = ({ productName, productPrice }) => {
  return (
    <p>
      <span style={{ color: "blue", fontWeight: "bold" }}>{productName}</span>: <span style={{ color: "green", fontStyle: "italic" }}>{productPrice}</span>
    </p >
  )
}