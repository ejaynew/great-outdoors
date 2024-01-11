// Explore.js

import React, { useState } from "react";
import { Container, Typography, Box, ButtonGroup, Button, List, ListItem } from "@mui/material";

// Mock data
const landmarksData = [
  { id: 1, name: "Landmark A", location: { lat: 51.505, lng: -0.09 } },
  { id: 2, name: "Landmark B", location: { lat: 51.51, lng: -0.1 } },
  // Add more landmark data
];

const hikesData = [
  { id: 1, name: "Hike A", location: { lat: 51.515, lng: -0.095 } },
  { id: 2, name: "Hike B", location: { lat: 51.525, lng: -0.1 } },
  // Add more hike data
];

const campingData = [
  { id: 1, name: "Camping Spot A", location: { lat: 51.51, lng: -0.1 } },
  { id: 2, name: "Camping Spot B", location: { lat: 51.52, lng: -0.12 } },
  // Add more camping data
];

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState("landmarks");
  const data = selectedCategory === "landmarks" ? landmarksData :
    selectedCategory === "hikes" ? hikesData :
    campingData;

  return (
    <Container>
      <Typography variant="h2" align="center" mt={3}>
        Explore Page
      </Typography>

      <Box mt={3} display="flex" justifyContent="center">
        <ButtonGroup>
          <Button
            onClick={() => setSelectedCategory("landmarks")}
            variant={selectedCategory === "landmarks" ? "contained" : "outlined"}
          >
            Landmarks
          </Button>
          <Button
            onClick={() => setSelectedCategory("hikes")}
            variant={selectedCategory === "hikes" ? "contained" : "outlined"}
          >
            Hikes
          </Button>
          <Button
            onClick={() => setSelectedCategory("camping")}
            variant={selectedCategory === "camping" ? "contained" : "outlined"}
          >
            Camping
          </Button>
        </ButtonGroup>
      </Box>

      <Box mt={3}>
        {/* List */}
        <List>
          {data.map(item => (
            <ListItem key={item.id}>
              {item.name} - Location: {item.location.lat}, {item.location.lng}
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Explore;
