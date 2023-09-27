import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

function Register() {
  return (
    <section className="h-screen flex justify-center items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          type="text"
          label="Username"
          name="username"
          defaultValue="Register77"
        />
        <FormInput
          type="email"
          label="Email"
          name="email"
          defaultValue="register@test.com"
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
          All ready a member ?{" "}
          <Link
            to="/login"
            className="ml-1 link link-hover link-primary capitalize">
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Register;
