import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";
function Login() {
  return (
    <section className="h-screen flex justify-center items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="Email"
          name="identifer"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button className="btn btn-secondary btn-block">Guest User</button>
        <p className="text-center">
          Not a member yet ?{" "}
          <Link to="/register" className="ml-1 link link-hover link-primary capitalize">Register</Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;
