
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >

          JobTracker
        </Typography>


        <Button
          color="inherit"
          component={Link}
          to="/"
        >
          Dashboard
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/applications"
        >
          Applications
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/applications/add"
        >
          Add Application
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
