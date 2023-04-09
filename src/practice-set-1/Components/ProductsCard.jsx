export const ProductsCard = ({ products }) => {

  return (
    <ul>
      {
        products.map(product => <li>{product.name}</li>)
      }
    </ul>
  )
}

// const sortedData=[...products].sort((a,b)=>a.sales-b.sales)
// console.log(sortedData)
// return (<ul>
// {products.map(({name},i)=><li key={i}>{name}</li>)}
//  </ul>)
// }