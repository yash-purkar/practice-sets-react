export const StationeryItems = ({ header, items }) => {
  return (
    <>
      <h1>{header}</h1>
      <ul>
        {
          items.map(item => <li>{item}</li>)
        }
      </ul>
    </>
  )
}