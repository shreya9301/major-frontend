import React, { useState } from "react";
//import axiosInstance from "../axios";
import axios from "../axios";

import  { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";


const REGISTER_URL = "register/";

export default function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");

  const navigate = useNavigate();


  // const handleChange = (e) => {
	// 	updateFormData({
	// 		...formData,
	// 		// Trimming any whitespace
	// 		[e.target.name]: e.target.value.trim(),
	// 	});
	// };


  const handleSubmit = async (e) => {
    e.preventDefault();

      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ first_name,last_name,email,username,password }),
        {
          // headers: { "Content-Type": "Multipart/form-data " },
          withCredentials: true,
        }
      );

      // const data = response.json();
      console.log(response);
      // console.log(data);
      //console.log(fname);
      //console.log(email);
      //clear state and controlled inputs
      localStorage.setItem("username", username);
      setUsername("");
      setPass("");
      setFname("");
      setLname("");
      setEmail("");
      navigate("/main");
  };
  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="fname"> First Name </label>{" "}
        <input
          value={first_name}
          onChange={(e) => setFname(e.target.value)}
          name="fname"
          id="fname"
          placeholder="first name"

        />
        <label htmlFor="lname"> Last Name </label>{" "}
        <input
          value={last_name}
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
          value={password}
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
            onClick = {handleSubmit}
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
