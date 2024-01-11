// Dashboard.js

import React from "react";
import { Container, Typography, Paper, Grid, List, ListItem, ListItemText } from "@mui/material";

const Dashboard = ({ user }) => {
  console.log("User in Dashboard:", user);
  // Sample user data (replace with actual user data)
  const username = user ? user.username : "Guest";
  const favoriteSpots = ["Spot A", "Spot B", "Spot C"]; // Replace with user's actual favorite spots
  const friendsList = ["Friend 1", "Friend 2", "Friend 3"]; // Replace with user's actual friends
  const communityAdventures = [
    { user: "User1", activity: "Hiking", location: "Mountain A" },
    { user: "User2", activity: "Camping", location: "Forest B" },
    // Add more community adventures
  ];

  return (
    <Container>
      <Typography variant="h2" align="center" mt={3}>
        Welcome, {username}!
      </Typography>

      <Grid container spacing={3} mt={4}>
        {/* Favorite Spots */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} p={2}>
            <Typography variant="h5" mb={2}>
              Favorite Spots
            </Typography>
            <List>
              {favoriteSpots.map((spot, index) => (
                <ListItem key={index}>
                  <ListItemText primary={spot} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Friends List */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} p={2}>
            <Typography variant="h5" mb={2}>
              Friends List
            </Typography>
            <List>
              {friendsList.map((friend, index) => (
                <ListItem key={index}>
                  <ListItemText primary={friend} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Community Adventures */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} p={2}>
            <Typography variant="h5" mb={2}>
              Community Adventures
            </Typography>
            <List>
              {communityAdventures.map((adventure, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`${adventure.user} logged a ${adventure.activity} adventure at ${adventure.location}`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
