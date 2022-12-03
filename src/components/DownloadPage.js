import React from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { FaDownload } from "react-icons/fa";

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
  return (
    <div>
      <Box sx={style}>
        <h1>Processing completed!</h1>
        <h2>You can now download the results.</h2>
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
            <FaDownload className="icon" />
            Download
          </Button>{" "}
        </div>{" "}
      </Box>
    </div>
  );
};

export default DownloadPage;
