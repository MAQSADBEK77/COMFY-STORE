import { useRouteError } from "react-router-dom";
function ErrorElement() {
  const error = useRouteError();
  console.log(error);
  return (
    <h4 className="mt-8 text-4xl font-bold text-center sm:4xl">
      There was an error...
    </h4>
  );
}
export default ErrorElement;
