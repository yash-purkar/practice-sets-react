export const ShowProjects = ({ project, setProjectDetails }) => {
  const { title, description } = project;
  const handleClick = () => {
    setProjectDetails(project);
  }
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div><span style={{ fontWeight: "bold" }}>Name: </span>{title}</div>
      <div><span style={{ fontWeight: "bold" }}>Description:</span> {description}</div>
      <button onClick={handleClick}>Show Details</button>
    </div>
  )
}
