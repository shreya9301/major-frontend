import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AuthContext from "../AuthProvider";

const Header = (props) => {
  let navigate = useNavigate();
  let {user, logoutUser} = useContext(AuthContext)

  function handleLogout(event) {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('username')
    
    navigate('/');
  }

  return (
    <AppBar
      position="fixed"
      className="app-bar"
      style={{
        background: "#5b8686",
        margin: "0",
        padding: "0",
      }}
    >
      <Toolbar>
        <Grid
          className="title-name"
          justifyContent="space-between"
          container
          alignItems="center"
          //   spacing={24}
        >
          <Grid item>
            <p className="title-name">Cancer Classifier</p>
          </Grid>
          <Grid item>
            <div
              style={{
                display: "flex",
                gap: "10px",
                verticalAlign: "middle",
                horizontalAlign: "middle",
              }}
            >
              {window.location.pathname === "/main" ||
              window.location.pathname === "/download" ? (
                <div>
                  {user &&   <p>Hello {user.username}</p>}
                  <Button color="inherit" onClick={handleLogout}> Logout</Button>
                </div>
              ) : null}
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
