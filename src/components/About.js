import React from "react";
import user from "../data/user";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{About() ? {user.bio} : null}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <links>
        <h3>Links</h3>
        <a href='{this.link.github}' text='{this.link.github}'></a>
      </links>
    </div>
  );
}

export default About;
