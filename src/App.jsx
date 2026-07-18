import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
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
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target);
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 1,
      }
    );
    const infoObserver = new IntersectionObserver(
      (entries)=>{
        entries.forEach((entry)=>{
          if (entry.isIntersecting) {
            console.log(entry.target);
            entry.target.classList.add("show");
          }
        })
      },{threshold:0.5}
    )
    const fastObserver = new IntersectionObserver(
      (entries)=>{
        entries.forEach((entry)=>{
          if (entry.isIntersecting) {
            console.log(entry.target);
            entry.target.classList.add("show");
          }
        })
      },{}
    )

    const h1 = document.querySelectorAll("h2")
    const h5 = document.querySelectorAll("h5")
    const techInfo = document.querySelectorAll(".info.tech")
    const info = document.querySelectorAll(".info:not(.tech")
    

    h1.forEach((el) => observer.observe(el));
    h5.forEach((el)=> observer.observe(el))
    info.forEach((el)=>infoObserver.observe(el))
    techInfo.forEach((el)=>fastObserver.observe(el))

  }, []);

  return (
    <>
      <div className="relative bg-[#131313] overflow-hidden">
        <img
          src="/gradientleft.webp"
          className="absolute top-[30%] md:top-[20%] blur-2xl"
          alt=""
        />

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
