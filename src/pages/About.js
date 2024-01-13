import React from "react";
import { Typography, Box } from "@mui/material";

function About() {
  return (
   <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Typography component for the title */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography variant="h1" color="text.primary" className="typography-title">
          About
        </Typography>
      </Box>
      <div className="content">
        <p>
          Hello there! My name is Adam and I've found my calling in the vibrant
          world of web and mobile technology at the University of the Incarnate
          Word. Here, I'm not just coding or designing; I'm reimagining how we
          interact with digital spaces. In addition to being passionate about
          technology, I'm also a devoted husband and a proud new father to a
          4-month-old. Balancing my family life with my professional endeavors
          has enriched my perspective, enhancing my creativity and
          problem-solving skills. My tech toolbox includes Javascript,
          FileZilla, Cascade CMS, React, XML, JSON, Express, AWS Lambda, Git,
          Microsoft Azure, Algolia, Ellucian Experience SDK, MaterialUI,
          Bootstrap, NodeJS, GraphQL, Canva, Photoshop, and Insomnia. For me,
          it's not just about the tools. It's about creating user-friendly tech
          marvels. I believe the best tech solutions are those that feel natural
          and intuitive – almost like they've always been a part of our lives.
          Collaboration is key in my book. I've always been a fan of
          brainstorming sessions where ideas bounce off the walls, and everyone
          has a voice. It's amazing what we can come up with when we put our
          minds together!
        </p>
      </div>
    </div>
  );
}

export default About;
