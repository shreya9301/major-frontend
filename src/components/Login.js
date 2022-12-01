import React, { useState } from "react";
import { Button } from "@mui/material";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };
  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
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
        />
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
            Submit{" "}
          </Button>{" "}
        </div>{" "}
      </form>{" "}
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here{" "}
      </button>{" "}
    </div>
  );
};

export default Login;
