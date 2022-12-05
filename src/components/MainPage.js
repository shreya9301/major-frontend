import React, { useState , useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { checkFile } from '../services/list';
import { Navigate, useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import loading from "./loading.json";


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
const MainPage = () => {
  const [file, setFile] = useState();
  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [status,setStatus] = useState(null);
  const navigate = useNavigate();

  const handleClose = () => setOpen(false);  

   useEffect(() => {
    let formData = new FormData();
    formData.append('username', localStorage.getItem('username'));
    fetch('http://localhost:8000/checkfile/',{method:"POST",body:formData})
    .then(response => {
      setStatus(response.status);
      console.log(response.status);
    }
    )
   },[]);

  function handleChange(event) {
    setFile(event.target.files[0]);
    var fileName = document.getElementById("file").value.toLowerCase();
    if (fileName.endsWith(".csv")) {
      setDisabled(false);
    }
  };

  function handleClick(event) {
    event.preventDefault();
    var fileName = document.getElementById("file").value.toLowerCase();

    if (!fileName.endsWith(".csv")) {
      console.log(fileName);
      alert("You can upload csv files only.");
      setDisabled(true);
      return false;
    } else {
      const url = "http://localhost:8000/upload/";
      const formData = new FormData();
      formData.append("gene_file", file);
      formData.append("username", localStorage.getItem('username'));
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      axios.post(url, formData, config).then((response) => {
        setOpen(true);
        setDisabled(false);
        console.log(response.data);
      });
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      {status == "200" ? navigate("/download") : null}
      <form>
        <h1>Hello <span style={{color: "red"}}>{localStorage.getItem('username')} 👋</span></h1>
        <h2>Upload your dataset below</h2>
        <h4 className="extension">Only .csv files are allowed</h4>

        <div className="custom-file-upload">
          <label>
            <input
              type="file"
              id="file"
              accept=".csv"
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
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          
          <Box sx={style}>
            <Typography>
              <Lottie 
                options={defaultOptions}
                height={120}
                width={120}
              />
            </Typography>          
            <Typography id="modal-modal-title" variant="h6" component="h2">
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Please Wait...
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            &nbsp;&nbsp;&nbsp;&nbsp;Your dataset is being processed.
            </Typography>
          </Box>
        </Modal>
      </form>
    </div>
  );
};

export default MainPage;
