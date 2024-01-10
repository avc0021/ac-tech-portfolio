import React from "react";
import { Card, CardContent, CardMedia, Typography, Link } from "@mui/material";
import HomeSearchVideo from "../videos/uiw-home-search.mp4";
import "../App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import MicrosoftVideo from "../videos/microsoft-card.mp4";
import CanvasVideo from "../videos/canvas-instructure.mp4";

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
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Microsoft Outlook and OneDrive Extension
            </Typography>
            <CardMedia component="video" controls autoPlay loop muted>
              <source src={MicrosoftVideo} type="video/mp4" />
            </CardMedia>
            <Typography variant="body2" color="text.secondary">
              Discover the seamless integration of Microsoft Outlook and OneDrive into your daily workflow with our innovative extension.
              This cutting-edge tool, meticulously designed for the Ellucian Experience platform, showcases your Outlook emails and OneDrive items in an intuitive, user-friendly interface.
              As a pioneering endeavor in my tech journey, this project was crafted using React, leveraged with the robust capabilities of Microsoft Azure, and enhanced by insights from the Ellucian Experience developer community. This solo project marks my first venture into deploying an extension from a test environment to production, demonstrating not only technical prowess but also a commitment to end-to-end project management. Witness this integration in action through our detailed video demo, illustrating how this extension streamlines your digital workspace
            </Typography>
            <GitHubIcon />
            <Link href="https://experience.elluciancloud.com/uotiw/">Explore</Link>
          </CardContent>
        </Card>

        <Card className="project-card">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Canvas Instructure Custom Card
            </Typography>
            <CardMedia component="video" controls autoPlay loop muted>
              <source src={CanvasVideo} type="video/mp4" />
            </CardMedia>
            <Typography variant="body2" color="text.secondary">
              This intuitive tool features two specialized cards: the 'Canvas Card' and the 'To-Do Card'. The Canvas Card displays course names and grades, complete with a convenient button at the bottom to view all your courses in detail. 
              Meanwhile, the To-Do Card presents a list of assignments, each with its name and due date, and includes links directing users to the dashboard for completing these tasks.
              Developed in collaboration with backend developers and Canvas representatives, this project was meticulously crafted from scratch using React, AWS Lambda, and the Ellucian Experience SDK, complemented by Insomnia for API testing.
            </Typography>
            <GitHubIcon />
            <Link href="https://experience.elluciancloud.com/uotiw/">Explore</Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
