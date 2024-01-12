import React from "react";
import {
  Typography,
  Box
} from "@mui/material";

function About() {
  return (
    <div className="container">
      <div className="content">
      <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h1" color="text.primary" className="typography-title">About</Typography>
        </Box>
        <p>
          Hello there! My name is Adam and I've found my calling in the vibrant
          world of web and mobile technology at the University of the Incarnate
          Word. Here, I'm not just coding or designing; I'm reimagining how we
          interact with digital spaces. I love diving into projects headfirst,
          whether it's bringing a new app to life or finding a fresh twist on a
          website. It's all about making things that people love to use. My tech
          toolbox includes Javascript, FileZilla, Cascade CMS, XML, JSON, Express, AWS Lambda, Git, Microsoft
          Azure, Algolia, Ellucian Experience SDK, MaterialUI, Bootstrap, NodeJS, GraphQL, Canva,
          Photoshop, and React. For me, it's not just about the tools. Its about
          creating user-friendly tech marvels. I believe the best tech solutions
          are those that feel natural and intuitive – almost like they've always
          been a part of our lives. Collaboration is key in my book and I've
          always been a fan of brainstorming sessions where ideas bounce off the
          walls, and everyone has a voice. It's amazing what we can come up with
          when we put our minds together!
        </p>
      </div>
    </div>
  );
}

export default About;
