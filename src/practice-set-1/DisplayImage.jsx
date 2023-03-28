export const DisplayImage = ({ url, caption }) => {
  return (
    <>
      <h3>{caption}</h3>
      <img src={url} alt="Img" style={{ width: "250px" }} />
    </>
  )
}