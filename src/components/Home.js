import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Home = () => {
  const [currentForm, setcurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setcurrentForm(formName);
  };

  return (
    <div>
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
};

export default Home;
