// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ButtonAppBar from "./components/ButtonAppBar";
import Login from "./components/Login";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/Homepage";
import Explore from "./components/Explore";
import Register from "./components/Register";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const App = () => {
  const [user, setUser] = useState(null);
  const theme = createTheme();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // This function will be called whenever the authentication state changes
      console.log("Authentication state changed:", user);
      setUser(user);
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  console.log("User in App:", user);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <ButtonAppBar user={user} setUser={setUser} onLogout={() => setUser(null)} />
          <Routes>
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register setUser={setUser} />} />
            <ProtectedRoute
              path="/dashboard"
              element={<Dashboard user={user} />}
            />
            <Route
              path="/logout"
              element={<Logout onLogout={() => setUser(null)} />}
            />
            <Route path="/" element={<Homepage />} />
            <Route path="/explore" element={<Explore />} />
            {/* Other routes */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
