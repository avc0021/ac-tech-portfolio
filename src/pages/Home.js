import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import myLogo from '../images/logo-ac.png';


function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = {
    "autoPlay": true,
    "background": {
      "color": {
        "value": "#232741"
      },
      "image": `url(${myLogo})`,
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "20%",
      "opacity": 1
    },
    "backgroundMask": {
      "composite": "destination-out",
      "cover": {
        "color": {
          "value": "#fff"
        },
        "opacity": 1
      },
      "enable": false
    },
    "clear": true,
    "defaultThemes": {},
    "delay": 0,
    "fullScreen": {
      "enable": true,
      "zIndex": 0
    },
    "detectRetina": true,
    "duration": 0,
    "fpsLimit": 120,
    "interactivity": {
      "detectsOn": "window",
      "events": {
        "onClick": {
          "enable": true,
          "mode": "repulse"
        },
        "onHover": {
          "enable": true,
          "mode": "bubble",
          "parallax": {
            "enable": false,
            "force": 2,
            "smooth": 10
          }
        },
        "resize": true
      },
      "modes": {
        "bubble": {
          "distance": 250,
          "duration": 2,
          "opacity": 0,
          "size": 0
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        }
        // ... other modes
      }
    },
    "particles": {
      "color": {
        "value": "#ffffff"
      },
      "move": {
        "direction": "none",
        "enable": true,
        "outModes": {
          "default": "out"
        },
        "random": false,
        "speed": {
          "min": 0.1,
          "max": 1
        },
        "straight": false
      },
      "number": {
        "value": 160
      },
      "opacity": {
        "value": {
          "min": 0.1,
          "max": 1
        },
        "animation": {
          "enable": true,
          "speed": 1
        }
      },
      "shape": {
        "type": "circle"
      },
      "size": {
        "value": {
          "min": 1,
          "max": 3
        }
      }
      // ... other particle properties
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true
    // ... other properties
  };

  return (
    <div className="container">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
    </div>
  );
}

export default Home;
