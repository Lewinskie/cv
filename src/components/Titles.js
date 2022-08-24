import { Grid, Typography } from "@mui/material";

export const Titles = ({ number, title }) => {
  const headingStyles = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    // justifyContent: "center",
  };
  return (
    <Grid container style={{ marginBottom: "4rem" }}>
      <Grid item xs={6} sm={5} md={4} lg={3} xl={2} style={headingStyles}>
        <Typography variant="h4" sx={{ color: "#47A77B" }}>
          {number}
        </Typography>
        <Typography variant="h4" sx={{ color: "#CCD6F6" }}>
          {title}
        </Typography>
      </Grid>
      <Grid
        item
        xs={6}
        sm={7}
        md={8}
        lg={9}
        xl={10}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ height: "0.5px", background: "#3B4759", width: "95%" }} />
      </Grid>
    </Grid>
  );
};
