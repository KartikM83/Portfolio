import React from "react";
import Nav from "./Component/Nav";
import './App.css'; // Import the CSS file
import Page1 from "./Component/page1";
import Projects from "./Component/Projects";
import Work from "./Component/Work";
import Showcase from "./Component/TechStack";
// import K from "./Component/K";
import TechStack from "./Component/TechStack";
import Contact from "./Component/Contact";
import Profile from "./Component/Profile";

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