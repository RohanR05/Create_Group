import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signIn } = use(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Sign In Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="card w-full max-w-sm shrink-0 shadow-2xl bg-[#F3F3E0] mx-auto mt-10 md:mt-28">
      <div className="card-body">
        {" "}
        <h1 className="text-5xl font-bold">Sign In now!</h1>
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
          />

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">sign In</button>
          <h2 className="text-sm font-medium mt-2">
            Have No Account?{" "}
            <span className="font-bold underline">
              <NavLink to="/signUp">Sign Up </NavLink>
            </span>
            Here
          </h2>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
