import { Grid, Typography } from "@mui/material";
import React from "react";
import { Container } from "../components/Container";
const styles = { height: "90vh", width: "100%" };

const Home = () => {
  return (
    <Container style={styles}>
      <Grid container style={{ height: "100%" }}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "#47B6A4", letterSpacing: 3,marginBottom:'1rem' }}>
            Hi, my name is
          </Typography>

          <Typography
            variant="h2"
            sx={{ color: "#CCD6F6", fontWeight: "bold" }}
          >
            Lewis Maina
          </Typography>
          <Typography
            variant="h2"
            sx={{ color: "#8892B0", fontWeight: "bold", marginTop: "1rem" }}
          >
            I build things for the web.
          </Typography>

          <Typography
            variant="body"
            sx={{ color: "#8892B0", marginTop: "2rem" }}
          >
            "I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on improving end users journey experience"
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
