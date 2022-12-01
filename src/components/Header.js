import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import { useRouter } from "next/router";
import Button from "@mui/material/Button";

const Header = () => {
  //   const router = useRouter();
  return (
    <AppBar
      position="fixed"
      className="app-bar"
      style={{
        background: "#5b8686",
        margin: "0",
        padding: "0",
        // fontFamily: "Helvetica",
      }}
    >
      <Toolbar>
        <Grid
          className="title-name"
          justifyContent="space-between"
          container
          spacing={24}
        >
          <Grid item>
            {/* <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 0 }}
              className="title-name"
            >
              Cancer Classification
            </Typography> */}
            <p className="title-name">Cancer Classification</p>
          </Grid>
          <Grid item>
            <div style={{ display: "flex", gap: "10px" }}>
              {/* <Button color="inherit">About Us</Button>
              <Button color="inherit">Contact Us</Button> */}
              {window.location.pathname === "/main" ? (
                <Button color="inherit"> Logout</Button>
              ) : null}
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
