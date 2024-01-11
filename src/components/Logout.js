// Logout.js

import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Logout = ({ onLogout }) => {
  useEffect(() => {
    // Perform logout logic
    signOut(auth).then(() => {
      // Invoke the onLogout callback (if provided)
      if (onLogout) {
        onLogout();
      }
    });
  }, [onLogout]);

  // Redirect to the homepage after logout
  return <Navigate to="/" />;
};

export default Logout;
