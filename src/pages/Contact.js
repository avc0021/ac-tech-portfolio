import React from "react";
import { Box, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  return (
    <div className="content">
 <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ListItem button component="a" href="https://github.com/ajcastr1" target="_blank">
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="GitHub- Work" />
          </ListItem>
          <ListItem button component="a" href="https://github.com/avc0021" target="_blank">
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary="GitHub- Personal" />
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
    </div>
  );
}

export default Contact;
