import { Typography } from "@mui/material";

export const Email = () => {
 
  const wrapper = {
    position: "fixed",
    top: "55%",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={wrapper}>
      <Typography
        variant="subtitle"
        sx={{
          transform: "rotate(90deg)",
          color: "#A0A8C0",
          letterSpacing: 3,
          "&:hover": {
            color: "#47A77B",
            transition: "all 0.3s ease-in-out",
            transform: "rotate(90deg)",
          },
        }}
      >
        wangara94@gmail.com
      </Typography>
    </div>
  );
};
