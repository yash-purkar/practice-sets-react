export const ProductsCard = ({ products }) => {

  return (
    <ul>
      {
        products.map(product => <li>{product.name}</li>)
      }
    </ul>
  )
}