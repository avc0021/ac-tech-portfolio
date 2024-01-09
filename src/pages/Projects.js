import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "../App.css";

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <div>
        <Card className="project-card">
          <CardMedia
            component="img"
            height="140"
            image="placeholder-image.jpg"
            alt="Project Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Project Title 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Project description goes here. This is a placeholder text.
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
