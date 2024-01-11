// Homepage.js

import React from "react";
import { Container, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" mt={5}>
        Welcome to My Outdoor App!
      </Typography>
      <Typography variant="body1" align="center" mt={3}>
        Explore the great outdoors with our amazing features.
      </Typography>
      <Grid container justifyContent="center" mt={3}>
        <Button
          component={Link}
          to="/login"
          variant="contained"
          color="primary"
          size="large"
          mx={2}
        >
          Login
        </Button>
        <Button
          component={Link}
          to="/dashboard"
          variant="outlined"
          color="primary"
          size="large"
          mx={2}
        >
          Continue as Guest
        </Button>
      </Grid>
    </Container>
  );
};

export default Homepage;
