import { ProductCard } from '../Components-Q1/ProductCard';

export const ProductListing = ({ productsData }) => {


  return (
    <>
      <h1>Products</h1>
      {productsData.length === 0 ? <h2>Loading...</h2> : <>
        <ul>
          {
            productsData?.map((product) => <ProductCard {...product} key={product.id} noDetail />)
          }
        </ul>
      </>}
    </>
  )
}
