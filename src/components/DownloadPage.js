import React from "react";
import axios from 'axios'
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { FaDownload } from "react-icons/fa";
import { fileDownload } from 'js-file-download';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 15px 25px",
  p: 4,
};

const DownloadPage = () => {
  let username = localStorage.getItem('username');
  const url = "http://127.0.0.1:8000/download/" + username + "/";
  function handleDownload(url, filename) {
    console.log(url);
    axios.get(url, {
        responseType: 'blob',
    })
    .then((res) => {
      const href = URL.createObjectURL(res.data);

    // create "a" HTML element with href to file & click
      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', filename); //or any other extension
      document.body.appendChild(link);
      link.click();

      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    })
  };
  // function handleDownload(username, filename) {
  //   fetch(`http://127.0.0.1:8000/download/${localStorage.getItem('username')}/`).then(
  //     response => {
  //       response.blob().then(blob => {
  //       let url = window.URL.createObjectURL(blob);
  //       let a = document.createElement("a");
  //       console.log(url);
  //       a.href = url;
  //       a.download = filename;
  //       a.click();
  //     });
  //   });
  // };

  return (
    <div>
      <Box sx={style}>
        <h1>Processing completed!</h1>
        <h2>You can now download the results.</h2>
        <div className="button-div">
          <Button
            onClick={() => {handleDownload(url, 'result.csv')}}
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
            <FaDownload className="icon" />
            Download
          </Button>{" "}
        </div>{" "}
      </Box>
    </div>
  );
};

export default DownloadPage;
