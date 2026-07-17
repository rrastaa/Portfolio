import { useEffect, useState } from "react";

function Navbar() {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY<100) {
        setShowNav(true)
      } else if (window.scrollY > lastY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastY = window.scrollY;
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 50) {
        setShowNav(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });
  return (
    <>
      <div
        className={`fixed flex w-full z-50 justify-end transition duration-300 ${
          showNav ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
        }`}
      >
        <div className=" w-[50vw] text-white justify-around mt-14 pt-2 rounded-full mb-4 pb-2 mr-14 flex z-50 px-16 bg-linear-to-br from-[#BFBFBF]/8 to-[#595959]/5 border border-white/10 backdrop-blur-lg">
          <a href="#">Home</a>
          <a href="#TechStack">Tech Stack</a>
          <a href="#ProjectView">Projects</a>
          <a href="#Contact">Contact Me</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
