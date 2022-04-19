import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import SocailLogin from "../SocialLogin/SocailLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const navigate = useNavigate();
  const navigateRegister = (event) => {
    navigate("/register");
  };
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="container w-50 mx-auto">
      <PageTitle title="Login"></PageTitle>
      <h1 className="text-primary text-center fw-bold">Please login</h1>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        New to Genius-Car?{" "}
        <Link
          to="/register"
          onClick={navigateRegister}
          className="text-primary fw-normal text-decoration-none"
        >
          Create an account.
        </Link>{" "}
      </p>
      <SocailLogin></SocailLogin>
    </div>
  );
};

export default Login;
