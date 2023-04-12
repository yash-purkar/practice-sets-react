export const ShowProduct = ({ name, description, price, quantity }) => {
  return (
    <li>
      <h2>Name: {name}</h2>
      <p>Desc: {description}</p>
      <p>Price: {price}INR</p>
      <p>QTY: {quantity}</p>
    </li>
  )
}
