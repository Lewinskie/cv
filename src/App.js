import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Work from "./pages/Work";
import { useRef } from "react";
import { Grid, Typography } from "@mui/material";
import { scrollToFunction } from "./components/Scroll";
import Socials from "./components/Socials";
import { Email } from "./components/Email";

function App() {
  const about = useRef(null);
  const experience = useRef(null);
  const work = useRef(null);
  const contact = useRef(null);
  const home = useRef(null);
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
    backDropFilter: "blur(10px)",
    background: "rgba(255,255,255,0.2)",
    padding: "2rem",
    color: "white",
    position: "sticky",
    top: 0,
    left: 0,
    display: "flex",
    zIndex: 2,
    height: "10vh",
    width: "100%",
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
          >
            {item.name}
          </Typography>
        ))}
      </div>
      <Grid container>
        <Grid
          item
          xs={2}
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
              padding: "0.5rem",
            }}
          >
            <Socials />
            <div style={verticleLine} />
          </div>
        </Grid>
        <Grid item xs={9} sm={10}>
          <div ref={home}>
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
