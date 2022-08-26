import React from "react";
import { Container } from "../components/Container";
import { Titles } from "../components/Titles";
import { projects } from "../components/Projects";
import { Grid, Typography } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { TiltComponent } from "../components/TiltComponent";

const styles = {
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};
const cardStyle = {
  boxShadow: 7,
  background: "rgba(255,255,255,0.2)",
  borderRadius: "0.5em",
  padding: "1rem",
};
const status = { display: "flex", marginBottom: "1rem", marginTop: "1rem" };

const Work = () => {
  return (
    <Container style={styles}>
      <div style={{ marginTop: "6rem" }}>
        <Titles number="03." title="Some projects built" />
      </div>

      <Grid container spacing={2} style={{ paddingBottom: "2rem" }}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <TiltComponent>
              <div style={cardStyle}>
                <div
                  style={{
                    marginBottom: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h5" sx={{ color: "#47A77B" }}>
                    {project.name}
                  </Typography>
                  {project.name !== "Village Market Mall" && (
                    <a href="https://www.github.com" style={{ color: "black" }}>
                      <GitHub />
                    </a>
                  )}
                </div>

                <Typography variant="h7" style={{ color: "#919DBB" }}>
                  {project.description}
                </Typography>
                <div style={status}>
                  <Typography variant="caption" sx={{ color: "#47A77B" }}>
                    Status:
                  </Typography>
                  &nbsp;
                  <Typography variant="caption" sx={{ color: "#65D7F4" }}>
                    {project.status}
                  </Typography>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  {project.icons &&
                    project.icons.map((icon) => (
                      <img
                        src={icon.url}
                        alt={icon.name}
                        key={icon.name}
                        height="25px"
                      />
                    ))}
                </div>
              </div>
            </TiltComponent>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Work;
