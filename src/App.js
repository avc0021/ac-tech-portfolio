import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import './App.css'; // Your CSS file
import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Rotate as Hamburger } from 'hamburger-react';
import ParticlesBackground from "./ParticlesBackground.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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

  return (
    <Router>
      <ParticlesBackground />
      <ThemeProvider theme={theme}>
      <nav className="navbar">
        <div className="hamburger">
          <Hamburger color="white" toggled={menuOpen} toggle={setMenuOpen} />
        </div>
      </nav>

      <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
        >
          <List>
            {['Home', 'About', 'Projects', 'Contact'].map((text, index) => (
              <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      </ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
