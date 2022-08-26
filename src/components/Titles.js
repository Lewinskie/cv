import { Typography } from "@mui/material";

export const Titles = ({ number, title }) => {
  const headingStyles = {
    display: "flex",
    alignItems: "center",
    width: "100%",
  };
  return (
    <div style={{ marginBottom: "4rem" }}>
      <div style={headingStyles}>
        <Typography variant="h4" sx={{ color: "#47A77B" }}>
          {number}
        </Typography>
        <Typography variant="h4" sx={{ color: "#CCD6F6" }}>
          {title}
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{ height: "0.5px", background: "#3B4759", width: "100%" }}
        />
      </div>
    </div>
  );
};
