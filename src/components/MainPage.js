import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

const MainPage = () => {
  const [file, setFile] = useState();
  const [disabled, setDisabled] = useState(false);

  function handleChange(event) {
    setFile(event.target.files[0]);
    var fileName = document.getElementById("file").value.toLowerCase();
    if (fileName.endsWith(".xls") || fileName.endsWith(".xlsx")) {
      setDisabled(false);
    }
  }

  function handleClick(event) {
    event.preventDefault();
    var fileName = document.getElementById("file").value.toLowerCase();

    if (!fileName.endsWith(".xls") && !fileName.endsWith(".xlsx")) {
      console.log(fileName);
      alert("You can upload xls or xlsx files only.");
      setDisabled(true);
      return false;
    } else {
      setDisabled(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:3000/uploadFile";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Hello username</h1>
        <h1>Upload your dataset below</h1>
        {/* <Buttons onClick={handleChange}>Upload a file</Buttons> */}
        <div className="custom-file-upload">
          <label>
            <input
              type="file"
              id="file"
              accept=".xls,.xlsx"
              onChange={handleChange}
            />
          </label>
        </div>

        <Button
          fullWidth
          variant="contained"
          type="submit"
          className="submit-btn"
          disabled={disabled}
          id="upload-btn"
          sx={{
            backgroundColor: "#5b8686",
            color: "white",
            fontWeight: "bold",
            fontSize: "17px",
            "&:hover": {
              background: "#63a5a5",
            },
          }}
          onClick={handleClick}
        >
          UPLOAD{" "}
        </Button>
        {/* <button type="submit">Upload</button> */}
      </form>
    </div>
  );
};

export default MainPage;
