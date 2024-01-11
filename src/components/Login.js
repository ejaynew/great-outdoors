import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Link,
} from "@mui/material";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Initialize the useNavigate hook
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      user.username = user.email.split("@")[0];

      // Set user in the App component state
      setUser(user);

      // Clear form and error state
      setEmail("");
      setPassword("");
      setError(null);

      // Redirect to the dashboard
      navigate("/dashboard");
    } catch (error) {
      // Handle login failure
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Set user in the App component state
      setUser(user);
    } catch (error) {
      // Handle Google login failure
      setError(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleEmailLogin}
          sx={{ mt: 3 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography variant="body2" color="error" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            component={RouterLink}
            onClick={handleEmailLogin}
            to="/dashboard"
          >
            Log In
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleGoogleLogin}
            sx={{ mt: 2 }}
          >
            Log in with Google
          </Button>
          <Link
            component={RouterLink}
            to="/register"
            variant="body2"
            sx={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Don't have an account? Register now.
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
