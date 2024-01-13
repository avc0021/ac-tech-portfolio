// import React from "react";
// import {
//   Typography,
//   Box,
  // ListItem,
  // ListItemIcon,
  // ListItemText,
// } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

// function Contact() {
//   return (
//     <div className="container">
//       <div className="content">
      // <Box
      //   sx={{
      //     flexGrow: 1,
      //     display: "flex",
      //     flexDirection: "column",
      //     alignItems: "center",
      //   }}
      // >
      //   <Typography
      //     variant="h1"
      //     color="text.primary"
      //     className="typography-title"
      //   >
      //     Contact
      //   </Typography>
      // </Box>
      //   <Box
      //     sx={{
      //       flexGrow: 1,
      //       display: "flex",
      //       flexDirection: "column",
      //       alignItems: "center",
      //     }}
      //   >
      //     <ListItem
      //       button
      //       component="a"
      //       href="https://www.linkedin.com/in/ac383/"
      //       target="_blank"
      //     >
      //       <ListItemIcon>
      //         <LinkedInIcon />
      //       </ListItemIcon>
      //       <ListItemText primary="LinkedIn" />
      //     </ListItem>
      //     <ListItem
      //       button
      //       component="a"
      //       href="https://github.com/ajcastr1"
      //       target="_blank"
      //     >
      //       <ListItemIcon>
      //         <GitHubIcon />
      //       </ListItemIcon>
      //       <ListItemText primary="GitHub - Work" />
      //     </ListItem>
      //     <ListItem
      //       button
      //       component="a"
      //       href="https://github.com/avc0021"
      //       target="_blank"
      //     >
      //       <ListItemIcon>
      //         <GitHubIcon />
      //       </ListItemIcon>
      //       <ListItemText primary="GitHub - Personal" />
      //     </ListItem>
      //     <ListItem button component="a" href="mailto:avc0021@gmail.com">
      //       <ListItemIcon>
      //         <EmailIcon />
      //       </ListItemIcon>
      //       <ListItemText primary="Email" />
      //     </ListItem>
      //     <ListItem>
      //       <ListItemIcon>
      //         <PhoneIcon />
      //       </ListItemIcon>
      //       <ListItemText primary="(210) 383-0681" />
      //     </ListItem>
      //   </Box>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a2a3ac", // Your chosen primary color
    },
    secondary: {
      main: "#7986cb", // Your chosen secondary color
    },
  },
});

function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h1" color="text.primary" className="typography-title">Contact</Typography>
        </Box>
        <div>
          <Card className="project-card">
            <CardContent>
            <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
      </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ListItem
            button
            component="a"
            href="https://www.linkedin.com/in/ac383/"
            target="_blank"
          >
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary="LinkedIn" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://github.com/ajcastr1"
            target="_blank"
          >
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="GitHub - Work" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://github.com/avc0021"
            target="_blank"
          >
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="GitHub - Personal" />
          </ListItem>
          <ListItem button component="a" href="mailto:avc0021@gmail.com">
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Email" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="(210) 383-0681" />
          </ListItem>
        </Box>
            </CardContent>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Contact;
