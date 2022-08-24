import React from "react";

import {
  Facebook,
  GitHub,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { Typography } from "@mui/material";

const Socials = () => {
  const icons = [
    { name: "GitHub", icon: <GitHub />, url: "www.github.com" },
    { name: "LinkedIn", icon: <LinkedIn />, url: "www.linkedin.com" },
    { name: "Twitter", icon: <Twitter />, url: "www.twitter.com" },
    { name: "Whatsapp", icon: <WhatsApp />, url: "www.Whatsapp.com" },
    { name: "facebook", icon: <Facebook />, url: "www.discord.com" },
  ];
  const style = { color: "white" };
  const iconStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <div style={style}>
      <div style={iconStyles}>
        {icons.map((item) => (
          <a href={item.url} key={item.name}>
            <Typography
              variant="h4"
              sx={{
                color: "#47A77B",
                "&:hover": {
                  color: "#CCD6F6",
                  transform: "scale(1.2)",
                  transition: "all 0.3s ease-in-out",
                },
              }}
            >
              {item.icon}
            </Typography>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
