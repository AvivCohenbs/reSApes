import "./About.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function About() {
  return (
    <div className="about-page">
      <div className="titles-about">
        <div className="first-title-about">About reSApes</div>
        <div className="main-title-about">
          Our mission is to be the smartest <br /> and most helpful food
          platform <br /> in existence
        </div>
        <div className="second-title-about">
          We're fulfilling this mission by improving life in the kitchen <br />
          for millions of home cooks around the world.
        </div>
      </div>
      <div className="card-about">
        <Card sx={{ display: "flex", width: 600 }}>
          <CardMedia
            component="img"
            sx={{ width: 300, transform: "translateX(0)" }}
            src="https://www.yummly.com/static/anml/img/about-visualization-discover-woman.jpg"
            alt="Live from space album cover"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                We help people discover <br /> what to eat based on <br />{" "}
                personal preferences and data{" "}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Our system of personalized discovery learns you better to serve
                you better, so the question "what's for dinner?" is answered
                before it's even asked.
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </div>
    </div>
  );
}
export default About;
