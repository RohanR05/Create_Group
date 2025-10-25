import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasUppercase) {
      return Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password must contain at least one uppercase letter.",
      });
    }

    if (!hasLowercase) {
      return Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password must contain at least one lowercase letter.",
      });
    }

    if (!hasMinLength) {
      return Swal.fire({
        icon: "error",
        title: "Password Error",
        text: "Password must be at least 6 characters long.",
      });
    }


    createUser(email, password)
      .then((result) => {
        console.log(result);
        const user = result.user;
        console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Account is created",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Sign Up Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="card w-full max-w-sm shrink-0 shadow-2xl bg-[#F3F3E0] mx-auto mt-10 md:mt-28 dark:bg-[#3d365c] dark:text-black">
      <div className="card-body">
        {" "}
        <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" name="name" />

          <label className="label">Address</label>
          <input
            type="text"
            className="input"
            placeholder="Address"
            name="address"
            required
          />

          <label className="label">Photo</label>
          <input
            type="text"
            className="input"
            placeholder="Photo URL"
            name="photo"
            required
          />

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            name="password"
            required
          />
          <button className="btn btn-neutral mt-4">sign Up</button>
          <h2 className="text-sm font-medium mt-2">
            Have An Account?{" "}
            <span className="font-bold underline">
              <NavLink to="/signIn">Sign In </NavLink>
            </span>
            Here
          </h2>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
