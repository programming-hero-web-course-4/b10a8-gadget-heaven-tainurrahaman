import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="text-center mt-48 space-y-3 text-white">
      <h1 className="text-4xl font-bold">Oops 404!</h1>
      <p className="text-2xl font-semibold ">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="font-bold text-5xl text-red-500">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
