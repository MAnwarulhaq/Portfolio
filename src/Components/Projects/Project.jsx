import React from 'react'
import Card from "../Cards/Card"
import mern from "../../Assets/mern.png"
import "./Project.css"
function Project() {
  return (
    <div id="projects">
        <h1 id='para'>References available upon request.</h1>
        <div className="slider">
          <Card title="Stopwatch" image={mern}/>
          <Card title="Stopwatch" image={mern}/>
          <Card title="Stopwatch" image={mern}/>
          <Card title="Stopwatch" image={mern}/>
          <Card title="Stopwatch" image={mern}/>
        </div>
    </div>
  )
}

export default Project