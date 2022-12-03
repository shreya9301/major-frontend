import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Header = () => {
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
