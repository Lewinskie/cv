import { ArrowRight } from "@mui/icons-material";
import { Grid, Tab, Tabs, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { Container } from "../components/Container";
import { Titles } from "../components/Titles";

const styles = {
  minHeight: "100vh",
  height: "fit-content",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const listStyle = {
  display: "flex",
  marginLeft: "1rem",
};

const headingStyles = {
  marginTop: "6rem",
  
};
const texts = {
  marginBottom: "1rem",
  color: "#8892B0",
};

const list = [
  {
    name: "aua",
    title: "Projects Technician ",
    span: "@ AUA INDURSTRIA",
    period: "July 2017 - Aug 2021",
    body: [
      " Do site surveys and installations of Access Controll systems, Local Area Networks for both Access and surveillance systems, Intrusion detection systems and alarms systems",
      "Handle suppliers & other clients complains and ensure the issues raised have been resolved to maintain end users satisfaction",
      "Handle client compliants and assist them either onsite or remotely to ensure client satisfaction is achieved",
      "Train end users on the core systems of AUA Indurstria",
    ],
  },
  {
    name: "freelance",
    title: "Fullstack dev",
    span: "@ FREELANCING",
    period: "Aug 2021 - Present",
    body: [
      "Design and Write modern, performant, maintainable code for personal projects (mostly for learning tech stacks)",
      "Learn more technologies to use in creating great user experiences",
      "Work with a variety of different languages, platforms & frameworks such as JavaScript, React, Mongoose, Node.js, Amazon AWS and GraphQL",
    ],
  },
  {
    name: "M-Tenders Africa",
    title: "Support Asscociate",
    span: "@ M-Tenders Africa",
    period: "April 2022 - Present",
    body: [
      "Assist suppliers and other clients who interact with M-Tenders Africa's e-procurement systems.",
      "Run tests on the e-procurement system and company's website and report bugs to the third-party developers to fix them",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
  },
];

const Experience = () => {
  const [value, setValue] = useState(0);
  const horizontal = useMediaQuery("(max-width:599px");
  const handleTabs = (e, value) => {
    console.log(value);
    setValue(value);
  };
  return (
    <Container style={styles}>
      <div style={headingStyles}>
        <Titles number="02." title="Experiences" />
      </div>

      <Grid container>
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          lg={2}
          style={{ backdropFilter: "blur(10px)", paddingTop: "0.5rem" }}
        >
          <Tabs
            value={value}
            onChange={handleTabs}
            TabIndicatorProps={{ style: { backgroundColor: "#47A77B" } }}
            orientation={horizontal ? "horizontal" : "vertical"}
            sx={{
              color: "#47A77B",
            }}
          >
            <Tab
              label="AUA INDURSTRIA"
              variant="contained"
              sx={{
                color: "#47A77B",
              }}
            />
            <Tab label="FREE-LANCING" sx={{ color: "#47A77B" }} />
            <Tab label="M-TENDERS AFRICA" sx={{ color: "#47A77B" }} />
          </Tabs>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={9}
          lg={10}
          style={{
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            paddingTop: "0.5rem",
          }}
        >
          {value === 0 &&
            list.map((item) => (
              <div key={item.name}>
                {item.name === "aua" && (
                  <div style={{ marginBottom: "1rem", marginLeft: "0.5rem" }}>
                    <div style={{ display: "flex" }}>
                      <Typography sx={{ color: "#CCD6F6" }}>
                        {item.title}
                      </Typography>
                      &nbsp;
                      <Typography sx={{ color: "#47A77B" }}>
                        {item.span}
                      </Typography>
                    </div>
                    <Typography variant="caption" style={{ color: "#8892B0" }}>
                      {item.period}
                    </Typography>
                  </div>
                )}
                {item.name === "aua" &&
                  item.body.map((body, index) => (
                    <div key={index} style={listStyle}>
                      <ArrowRight sx={{ color: "#47A77B" }} />
                      <Typography sx={texts}>{body}</Typography>
                    </div>
                  ))}
              </div>
            ))}
          {value === 1 &&
            list.map((item) => (
              <div key={item.name}>
                {item.name === "freelance" && (
                  <div style={{ marginBottom: "1rem", marginLeft: "0.5rem" }}>
                    <div style={{ display: "flex" }}>
                      <Typography sx={{ color: "#CCD6F6" }}>
                        {item.title}
                      </Typography>
                      &nbsp;
                      <Typography sx={{ color: "#47A77B" }}>
                        {item.span}
                      </Typography>
                    </div>
                    <Typography variant="caption" style={{ color: "#8892B0" }}>
                      {item.period}
                    </Typography>
                  </div>
                )}
                {item.name === "freelance" &&
                  item.body.map((body, index) => (
                    <div key={index} style={listStyle}>
                      <ArrowRight sx={{ color: "#47A77B" }} />
                      <Typography sx={texts}>{body}</Typography>
                    </div>
                  ))}
              </div>
            ))}
          {value === 2 &&
            list.map((item) => (
              <div key={item.name}>
                {item.name === "M-Tenders Africa" && (
                  <div style={{ marginBottom: "1rem", marginLeft: "0.5rem" }}>
                    <div style={{ display: "flex" }}>
                      <Typography sx={{ color: "#CCD6F6" }}>
                        {item.title}
                      </Typography>
                      &nbsp;
                      <Typography sx={{ color: "#47A77B" }}>
                        {item.span}
                      </Typography>
                    </div>
                    <Typography variant="caption" style={{ color: "#8892B0" }}>
                      {item.period}
                    </Typography>
                  </div>
                )}
                {item.name === "M-Tenders Africa" &&
                  item.body.map((body, index) => (
                    <div key={index} style={listStyle}>
                      <ArrowRight sx={{ color: "#47A77B" }} />
                      <Typography sx={texts}>{body}</Typography>
                    </div>
                  ))}
              </div>
            ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Experience;
