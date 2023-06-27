import React from "react";
import "../styles/notFound.css";

import image from "../assets/images/notfound.gif";

function NotFound() {
  return (
    <div className="container">
      <h1 className="title">OUPS!!!!!!!</h1>
      <p className="not-found">This page is not yet available...</p>
        <img src={image} alt="Machine logo" width="400rem"/>
      <h3 style={{color:"#5a76b7"}}>404 - NOT FOUND</h3>
    </div>
  );
}

export default NotFound;
