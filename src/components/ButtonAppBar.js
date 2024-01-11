import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const ButtonAppBar = ({ user, onLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  console.log(theme.palette.primary.main)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    onLogout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        {user ? (
          <div>
            <Link
              variant="body1"
              sx={{
                mr: 2,
                cursor: "pointer",
                style: {
                  color: theme.palette.getContrastText(
                    theme.palette.primary.main
                  ),
                },
              }}
              to="/profile" // Link to the profile page
            >
              Welcome, {user.username}
            </Link>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>

    {/* Dropdown Menu */}
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem component={Link} to="/dashboard" onClick={handleClose}>
        Dashboard
      </MenuItem>
      <MenuItem component={Link} to="/explore" onClick={handleClose}>
        Explore
      </MenuItem>
      {/* Add more menu items as needed */}
    </Menu>
  </Box>
);
};

export default ButtonAppBar;