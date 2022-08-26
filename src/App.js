import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Work from "./pages/Work";
import { useRef } from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { scrollToFunction } from "./components/Scroll";
import Socials from "./components/Socials";
import { Email } from "./components/Email";

function App() {
  const about = useRef(null);
  const experience = useRef(null);
  const work = useRef(null);
  const contact = useRef(null);
  const home = useRef(null);
  const isMobile = useMediaQuery("(max-width:500px)");
  const nav = [
    { name: "Home", ref: home },
    { name: "About", ref: about },
    { name: "Experience", ref: experience },
    { name: "Work", ref: work },
    { name: "Contact", ref: contact },
  ];
  const appStyle = {
    position: "relative",
    background: "#0A192F",
    backgroundAttachment: "fixed",
  };

  const navStyle = {
    padding: "2rem",
    color: "white",
    position: "sticky",
    top: 0,
    left: 0,
    display: isMobile ? "none" : "flex",
    zIndex: 2,
    height: "10vh",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: "2rem",
    background: "linear-gradient(145deg, #0b1b32, #09172a)",
    boxShadow: "5px 5px 12px #060e1a,\n -5px -5px 12px #0e2444",
  };
  const verticleLine = {
    width: "2px",
    height: "30%",
    background: "#A0A8C0",
    position: "fixed",
    top: "80%",
  };

  return (
    <div style={appStyle}>
      <div style={navStyle}>
        {nav.map((item) => (
          <Typography
            onClick={() => scrollToFunction(item.ref)}
            key={item.name}
            variant="h7"
            sx={{ color: "#47A77B", textTransform: "uppercase" }}
          >
            {item.name}
          </Typography>
        ))}
      </div>
      <Grid container>
        <Grid
          item
          xs={1}
          sm={1}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              position: "fixed",
              top: "40%",
              // padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Socials />
            <div style={verticleLine} />
          </div>
        </Grid>
        <Grid item xs={10} sm={10}>
          <div ref={home} className="bounce-in-top">
            <Home />
          </div>
          <div ref={about}>
            <About />
          </div>
          <div ref={experience}>
            <Experience />
          </div>
          <div ref={work}>
            <Work />
          </div>
          <div ref={contact}>
            <Contact />
          </div>
        </Grid>
        <Grid item xs={1} sm={1}>
          <div
            style={{
              height: "100%",
              width: "100%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Email />
            <div style={verticleLine} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
