import React from "react";
import { Card, CardContent, CardMedia, Typography, Link } from "@mui/material";
import HomeSearchVideo from "../videos/uiw-home-search.mp4";
import "../App.css";
import GitHubIcon from "@mui/icons-material/GitHub";

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <div>
        <Card className="project-card">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              University of the Incarnate Word - Search
            </Typography>
            <CardMedia component="video" controls autoPlay loop muted>
              <source src={HomeSearchVideo} type="video/mp4" />
            </CardMedia>
            <Typography variant="body2" color="text.secondary">
              In this pivotal project, which I spearheaded from development through to production, we achieved a significant milestone by integrating our Banner database with Algolia. 
              This integration marked the first time a unified search feature was implemented across all our sites. Utilizing Insomnia, JavaScript, and XML/JSON for data handling, we crafted an advanced search bar and mega menu within Cascade CMS. This enhancement not only streamlined site navigation but also significantly boosted user engagement, demonstrating our commitment to employing state-of-the-art technology to provide a comprehensive and user-friendly experience.
            </Typography>
            <GitHubIcon />
            <Link href="https://www.uiw.edu/">Explore</Link>
          </CardContent>
        </Card>

        <Card className="project-card">
          <CardMedia
            component="img"
            height="140"
            image="placeholder-image.jpg" // Replace with your image path
            alt="Project Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Project Title 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Another project description. This is also a placeholder.
            </Typography>
          </CardContent>
        </Card>

        <Card className="project-card">
          <CardMedia
            component="img"
            height="140"
            image="placeholder-image.jpg" // Replace with your image path
            alt="Project Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Project Title 3
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Another project description. This is also a placeholder.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
