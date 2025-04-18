import React from "react";
import ReactDOM from "react-dom";

import Card from "./components/Card";

ReactDOM.render(
  // Hard Coded version w/o components + props
  // <div>
  //   <h1>My Contacts</h1>

  //   <h2>Beyonce</h2>
  //   <img
  //     src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
  //     alt="avatar_img"
  //   />
  //   <p>+123 456 789</p>
  //   <p>b@beyonce.com</p>

  //   <h2>Jack Bauer</h2>
  //   <img
  //     src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
  //     alt="avatar_img"
  //   />
  //   <p>+987 654 321</p>
  //   <p>jack@nowhere.com</p>

  //   <h2>Chuck Norris</h2>
  //   <img
  //     src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
  //     alt="avatar_img"
  //   />
  //   <p>+918 372 574</p>
  //   <p>gmail@chucknorris.com</p>
  // </div>,
  <div>
    <h1>My Contacts</h1>

    <Card 
    name="Beyonce" 
    img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
    tel="+123 456 789"
    email="b@beyonce.com"
    />

    <Card 
    name="David Hu"
    img="../public/images/Headshot.jpg"
    tel="email me"
    email="who.is.david101@gmail.com"
    />
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
