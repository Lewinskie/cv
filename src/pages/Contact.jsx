import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Container } from "../components/Container";
import { Titles } from "../components/Titles";

const styles = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const item = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
};
const Contact = () => {
  return (
    <Container style={styles}>
      <Grid
        container
        style={{ display: "flex", flexDirection: "column", Height: "100%" }}
      >
        <Grid item xs={12} style={item}>
          <Titles number="04." title="What's Next?" />

          <Typography
            variant="h4"
            style={{ color: "#CCD6F6", marginBottom: "1rem" }}
          >
            Get In Touch
          </Typography>

          <Typography variant="h7" style={{ color: "#8690AE" }}>
            Am currently looking for a new opportunity that will help me grow
            career-wise and skillwise & my inbox is always open. Whether you
            have a question, want a quote on a project that you'd want me to
            handle for you or just want to say hi, inbox me and i will get back
            to you!
          </Typography>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Button
              variant="outlined"
              size="large"
              href="mailto:wangara94@gmail.com"
              className="heartbeat"
              sx={{ marginTop: "8rem" }}
            >
              say hello
            </Button>
          </div>

          <Typography
            variant="caption"
            sx={{
              color: "#7F89A6",
              letterSpacing: "0.1rem",
              // marginBottom: "1rem",
              textAlign: "center",
              marginTop: "4rem",
              "&:hover": {
                color: "#47A77B",
                transition: "all 1s ease-in-out",
              },
            }}
          >
            Built by Lewis Maina
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
