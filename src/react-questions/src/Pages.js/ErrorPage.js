import { NavLink } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <>
      <h1>404 Page Not Found</h1>
      <NavLink to="/">Go To Home Page</NavLink>
    </>
  );
};
