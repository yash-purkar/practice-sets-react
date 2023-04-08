export const ShowProduct = ({ filteredProductsData }) => {
  return (
    <>
      {
        filteredProductsData.map(({ name, price, desc, src }, i) => {
          return (
            <div key={i}>
              <img src={src} alt="Img" />
              <h2>Name: {name}</h2>
              <p><strong>Price: </strong>Rs. {price}</p>
              <p><strong>Description: </strong> {desc}</p>
            </div>
          )
        })
      }
    </>
  )
}
