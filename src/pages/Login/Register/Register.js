import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Register.css";
import SocailLogin from "../SocialLogin/SocailLogin";
import PageTitle from "../../Shared/PageTitle/PageTitle";
const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  if (user) {
    navigate("/home");
  }

  const hanldeRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const passwoed = event.target.password.value;
    createUserWithEmailAndPassword(email, passwoed);
  };
  return (
    <div className="form-container">
      <PageTitle title="Registraton"></PageTitle>
      <h1 className="text-center text-primary fw-bold py-3">
        Please Register.
      </h1>
      <form onSubmit={hanldeRegister}>
        <input type="text" name="name" placeholder="Your Name" />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <input
          type="submit"
          value="Register"
          className="w-50 mx-auto bg-primary text-white fw-bold"
        />
      </form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          onClick={navigateLogin}
          className="text-primary fw-normal text-decoration-none"
        >
          Please Login.
        </Link>{" "}
      </p>
      <SocailLogin></SocailLogin>
    </div>
  );
};

export default Register;
