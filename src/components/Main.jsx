import './Main.css';
import Face from "./face/Face";
import AboutMe from "./about-me/AboutMe";
import Navbar from "./navbar/Navbar";
import Projects from './Projects/Projects';

export default function Main() {
  return (
    <div>
      <>
        <div className="page">
          <div><Navbar /></div>
          <div><Face /></div>
           <div><AboutMe /></div>
          <div><Projects /></div>
          {/*<div>hello</div>
          <div>hello</div>
          <div>hello</div> */}
        </div>
      </>
    </div>
  );
}
