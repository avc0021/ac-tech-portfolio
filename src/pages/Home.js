import React from "react";
// import logo from '../images/2.png';
import myVideo from "./../images/logo-video-ac.mp4";

function Home() {
  return (
    <div className="container">
      <video width="750" height="500" autoPlay loop muted id="background-video">
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Home;
