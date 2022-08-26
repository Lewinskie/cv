import { Button, Typography } from "@mui/material";
import React from "react";
import { Container } from "../components/Container";
import { Titles } from "../components/Titles";

const styles = {
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

const top = { marginTop: "6rem", display: "flex", justifyContent: "center" };
const Contact = () => {
  return (
    <Container style={styles}>
      <div style={top}>
        <Titles number="04." title="Whats' Next?" />
      </div>
      <div>
        <Typography
          variant="h4"
          style={{ color: "#CCD6F6", marginBottom: "1rem" }}
        >
          Get In Touch
        </Typography>
      </div>

      <Typography variant="h7" style={{ color: "#8690AE" }}>
        Am currently looking for a new opportunity that will help me grow
        career-wise and skillwise & my inbox is always open. Whether you have a
        question, want a quote on a project that you'd want me to handle for you
        or just want to say hi, inbox me and i will get back to you!
      </Typography>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5rem",
          }}
        >
          <Button
            variant="outlined"
            size="large"
            href="mailto:wangara94@gmail.com"
            className="heartbeat"
          >
            say hello
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "#7F89A6",
              letterSpacing: "0.1rem",
              marginBottom: "1rem",
              "&:hover": { color: "#47A77B", transition: "all 1s ease-in-out" },
            }}
          >
            Built by Lewis Maina
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
