import React, { useState } from "react";
import { useContext } from "react";
import { redirect, useNavigate } from 'react-router-dom';
import AuthContext from "../AuthProvider";
import axiosInstance from '../axios';
import { Button } from "@mui/material";
import axios from "../axios";
//const LOGIN_URL = 'token/'

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  let navigate = useNavigate();

  //let { loginUser } = useContext(AuthContext);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(username);
  // };

  // "async - await"
  // let loginUser = useContext(AuthContext)
  // const handleSubmit = async (e) => {
  //   console.log("requestttt")
  //   e.preventDefault();

  //   axiosInstance
	// 		.post(`token/`, 
  //       JSON.stringify({ username,email,pass }),
  //     )
	// 		.then((res) => {
	// 			localStorage.setItem('access_token', res.data.access);
	// 			localStorage.setItem('refresh_token', res.data.refresh);
	// 			axiosInstance.defaults.headers['Authorization'] =
	// 				'JWT ' + localStorage.getItem('access_token');
	// 			history.push('/');
	// 			//console.log(res);
	// 			//console.log(res.data);
	// 		});


    // try {
    //   const response = await axios.post(
    //     LOGIN_URL,
    //     JSON.stringify({ username,email,pass }),
    //     {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     }
    //   );
    //   const accessToken = response?.data?.accessToken;
    //   const roles = response?.data?.roles;
    //   setAuth({ email,username, pass, roles, accessToken });
    //   setUsername("");
    //   setPass("");
    //   setEmail("");
    // } catch (err) {
    //   // if (!err?.response) {
    //   //   setErrMsg("No Server Response");
    //   // } else if (err.response?.status === 400) {
    //   //   setErrMsg("Missing Username or Password");
    //   // } else if (err.response?.status === 401) {
    //   //   setErrMsg("Unauthorized");
    //   // } else {
    //   //   setErrMsg("Login Failed");
    //   // }
    //   // errRef.current.focus();
    //   console.log(err);
    // }
  
    const login = (e) => {
      e.preventDefault();
      const data = {
        username,
        pass,
        email,
      };

      let formData = new FormData();
      formData.append('username', username);
      formData.append('email',email);
      formData.append('password', pass);
      fetch("http://localhost:8000/token/", {
        method: "POST",
        // headers: { "Content-Type": "application/formData" },
        body: formData,
      }).then((res) => {
        if (res.status == "200") {
          res.json().then((data) => {
            console.log(data);
            setPass(pass);
            setEmail(email);
            setUsername(username);
            localStorage.setItem('accessToken',data.access)
            localStorage.setItem('refreshToken', data.refresh)
            localStorage.setItem('username', username)
            // localStorage.setItem('isLoggedin',true )
            //setLoggedin(true)
            navigate("/main");

          });
        } else {
          res.json().then((data) => {
            console.log(data);

          });
        }
      });
    };


  return (
    <div className="auth-form-container" >
      <form className="login-form" onSubmit={login}>
        <label htmlFor="username"> Username </label>{" "}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="abc123"
          id="username"
          name="username"
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
