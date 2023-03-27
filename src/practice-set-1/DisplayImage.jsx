export const DisplayImage = ({ url, caption }) => {
  return (
    <>
      <img src={url} alt="Img" style={{ width: "250px" }} />
      <p>{caption}</p>
    </>
  )
}