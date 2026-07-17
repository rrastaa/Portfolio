import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import TechStack from "./components/TechStack.jsx";
import ProjectsView from "./components/ProjectsView.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative bg-[#131313] overflow-hidden">
        
          <img src="/gradientleft.webp" className="absolute top-[30%] md:top-[20%] blur-2xl" alt="" />

          <img
            src="/gradvert.webp"
            className="absolute bottom-0 right-0 scale-x-200 md:translate-x-200 blur-3xl"
            alt=""
          />
        

        <div className="relative z-10">
          <Navbar></Navbar>
          <Home></Home>
          <TechStack></TechStack>
          <ProjectsView></ProjectsView>
          <Contact></Contact>
        </div>
      </div>
    </>
  );
}

export default App;
