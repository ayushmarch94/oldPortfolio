import React from "react";
import './Main.css';
import Navbar from "./navbar/Navbar";
import Face from "./face/Face";

export default function Main() {
  return (
    <div>
      <>
        <div class="page">
          <div><Navbar /></div>
          <div><Face /></div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
        </div>
      </>
    </div>
  );
}
