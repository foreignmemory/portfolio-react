import { useRouteError } from "react-router-dom";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <h1>Woops! Something isn't Right...</h1>
  )
}