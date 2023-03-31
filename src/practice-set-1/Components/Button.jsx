export const Button = ({ backgroundColor, color, borderRadius, padding }) => {
  const styles = {
    backgroundColor, color, borderRadius, padding
  }

  return (
    <button style={styles}>Start</button>
  )
}