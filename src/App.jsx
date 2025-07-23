import React from "react";
import Nav from "./Component/Nav.jsx";
import './App.css'; // Import the CSS file
import Page1 from "./Component/Page1.jsx";
import Projects from "./Component/Projects.jsx";
import Work from "./Component/Work.jsx";
import Showcase from "./Component/TechStack.jsx";
// import K from "./Component/K";
import TechStack from "./Component/TechStack.jsx";
import Contact from "./Component/Contact.jsx";
import Profile from "./Component/Profile.jsx";

function App(){

  

  return(
    <div>
         <Nav />
         <Page1 />
         <Profile />
         <Work />
         <Projects />
         <TechStack  />
         <Contact />
    
    </div>
   
  
  )
}

export default App;
