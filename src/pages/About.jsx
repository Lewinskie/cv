import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { Container } from "../components/Container";
import { ArrowRight } from "@mui/icons-material";
import { Titles } from "../components/Titles";

const styles = { height: "100vh", width: "100%" };
const techStyles = { display: "flex", alignItems: "center" };

const wrapper = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  justifyContent: "center",
  width: "100%",
};

const About = () => {
  const technologies = [
    "Javascript",
    "React",
    "Node.js",
    "Mongoose",
    "Amazon AWS",
    "GraphQL",
  ];
  return (
    <Container style={styles}>
      <Grid container style={{ height: "100%" }}>
        <Grid item xs={12} style={wrapper}>
          <Titles number="01." title="About Me" />
          <Typography
            variant="h6"
            sx={{ color: "#8892B0", marginBottom: "1rem" }}
          >
            Hello! My name is Lewis and I enjoy creating things that live on the
            internet. My interest in web development started back in 2017 when I
            left campus — turns out that those endless bootcamps and youtube
            tutorials taught me alot about front-end web develpoment!
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#8892B0", marginBottom: "1rem" }}
          >
            Fast-forward to today, and I’ve had the privilege of working at a
            Security consultancy firm, as a free-lance network, access-control
            and surveillance consultant, a free-lance front-end web designer and
            a projects support associate at a leading e-procurement firm. My
            main focus these days is building accessible, inclusive products and
            digital experiences at Upstatement for a variety of clients.
          </Typography>
          <Typography variant="h6" sx={{ color: "#8892B0" }}>
            Here are a few technologies I’ve been working with recently:
          </Typography>
          <Grid container>
            {technologies.map((item, index) => (
              <Grid item xs={6} style={techStyles} key={index}>
                <ArrowRight sx={{ color: "#47A77B" }} />
                <Typography sx={{ color: "#8892B0" }}>{item}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;