import { Button, Grid } from "@mui/material";
import React from "react";
import { Container } from "../components/Container";
import { Titles } from "../components/Titles";

const styles = { height: "100vh", width: "100%" };

const Experience = () => {
  const places = ["AUA indurstria", "Free-lance", "M-Tenders Africa"];
  return (
    <Container style={styles}>
      <Grid container style={{ height: "100%" }}>
        <Titles number="02." title="Where i've worked" />
        <Grid item xs={12} sm={4}>
          {places.map((item, index) => (
            <Button fullWidth sx={{ color: "#CCD6F6" }} key={index}>
              {item}
            </Button>
          ))}
        </Grid>
        <Grid item xs={12} sm={8}></Grid>
      </Grid>
    </Container>
  );
};

export default Experience;
