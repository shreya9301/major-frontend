import React, { useState } from "react";
import { Button } from "@mui/material";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };
  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="fname"> First Name </label>{" "}
        <input
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          name="fname"
          id="fname"
          placeholder="first name"
        />
        <label htmlFor="lname"> Last Name </label>{" "}
        <input
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          name="lname"
          id="lname"
          placeholder="last name"
        />
        <label htmlFor="exampleInputEmail">Email address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="username123@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="username"> Username </label>{" "}
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="abc123"
          id="username"
          name="username"
        />
        <label htmlFor="password"> Password </label>{" "}
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />{" "}
        <div className="button-div">
          <Button
            fullWidth
            variant="contained"
            type="submit"
            className="submit-btn"
            sx={{
              backgroundColor: "#5b8686",
              color: "white",
              fontWeight: "bold",
              fontSize: "17px",
              "&:hover": {
                background: "#63a5a5",
              },
            }}
          >
            Sign Up{" "}
          </Button>{" "}
        </div>{" "}
      </form>{" "}
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here{" "}
      </button>{" "}
    </div>
  );
};

export default Register;
