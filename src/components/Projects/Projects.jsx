import React from 'react';
import "./Projects.css";
export default function Projects() {
  return (
    <div className='Projects'>
      <div className='Components'>
        <div
        className='compdiv'>
          <div className='image'>
            <img src={require("../../images/portfolio.png")} width={300} />
            <hr></hr>
          </div>
        </div>
        <div
        className='compdiv'>
          <div className='image'>
            <img src={require("../../images/calculator.png")} width={300} />
            <hr></hr>
          </div>
        </div>
        <div
        className='compdiv'>
          <div className='image'>
            <img src={require("../../images/weather.png")} width={300} />
            <hr></hr>
          </div>
        </div>
        <div
        className='compdiv'>
          <div className='image'>
            <img src={require("../../images/signup.png")} width={300} />
            <hr></hr>
          </div>
        </div>
        <div
        className='compdiv'>
          <div className='image'>
            <img src={require("../../images/todo.png")} width={300} />
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  )
}
