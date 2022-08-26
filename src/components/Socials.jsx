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
    {
      name: "GitHub",
      icon: <GitHub />,
      url: "https://www.github.com/Lewinskie",
    },
    {
      name: "LinkedIn",
      icon: <LinkedIn />,
      url: "https://www.linkedin.com/in/lewis-maina-738b4287",
    },
    {
      name: "Twitter",
      icon: <Twitter />,
      url: "https://twitter.com/elwismane",
    },
    {
      name: "Whatsapp",
      icon: <WhatsApp />,
      url: "https://wa.me/+254705313785",
    },
    { name: "facebook", icon: <Facebook />, url: "https://www.discord.com" },
  ];
  const style = { color: "white" };
  const iconStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <div style={style} className="flicker-in-1">
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
