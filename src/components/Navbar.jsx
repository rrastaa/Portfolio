import { useEffect, useState } from "react";

const navItems = [
  {
    href: "#",
    name: "Home",
  },
  {
    href: "#TechStack",
    name: "Tech Stack",
  },
  {
    href: "#ProjectView",
    name: "Projects",
  },
  {
    href: "#Contact",
    name: "Contact Me",
  },
];

function Navbar() {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShowNav(true);
      } else if (window.scrollY > lastY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastY = window.scrollY;
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 100) {
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
        className={`fixed flex w-full z-50 justify-center md:justify-end transition duration-300 ${
          showNav ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
        }`}
      >
        <div className=" w-[60vw] text-white justify-around text-xs md:text-base mt-6 pt-2 rounded-full mb-4 pb-2 mr-14 flex z-50 px-8 md:px-16 bg-linear-to-br from-[#BFBFBF]/8 to-[#595959]/5 border border-white/10 backdrop-blur-lg">
          {navItems.map((items) => (
            <a className="hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition duration-200 hover:scale-102 overflow-hidden" href={items.href}>
              {items.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
