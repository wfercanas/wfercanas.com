import { ErrorResponse, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError() as ErrorResponse;
  console.error(error);

  return (
    <div>
      <h1>Ooops</h1>
      <p>Something bad happened</p>
      <p>
        <i>{error.statusText}</i>
      </p>
    </div>
  );
}

export { Error };
