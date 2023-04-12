export const ShowProduct2 = ({ name, price, quantity, rating }) => {
  const styles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "600px",
    border: "1px solid lightgray",
    padding: "2rem",
    marginBottom: "1rem",
    borderRadius: "1rem"
  }
  return (
    <li style={styles}>
      <div>
        <p>Name: {name}</p>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <p>Rating: {rating}</p>
    </li>
  )
}

