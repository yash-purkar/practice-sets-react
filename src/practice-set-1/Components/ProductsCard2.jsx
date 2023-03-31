export const ProductsCard2 = ({ products }) => {
  const newProducts = products.filter(({ quantity, sales }) => sales > quantity)
  // console.log(newProducts)
  return (
    <ul>
      {newProducts.map(({ name, quantity, sales }) => <li>Name : {name}, Quantity : {quantity}, Sales:{sales}</li>)}
    </ul>
  )
}