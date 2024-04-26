import React from "react";

function About(props) {
  const { bio }=props
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio !== "" && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    </div>
  );
}

export default About;
