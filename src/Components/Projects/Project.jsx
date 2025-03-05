import React from 'react'
import Card from "../Cards/Card"
import "./Project.css"
function Project() {
  return (
    <div id="projects">
        <h1>References available upon request.</h1>
        <div className="slider">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
    </div>
  )
}

export default Project