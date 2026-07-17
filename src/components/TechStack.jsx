const techStack = [
  {
    icon: "/icons/JavaScript.svg",
    name: "JavaScript",
  },
  {
    icon: "/icons/React.svg",
    name: "React",
  },
  {
    icon: "/icons/TailwindCss.svg",
    name: "Tailwind CSS",
  },
  {
    icon: "/icons/Laravel.svg",
    name: "Laravel",
  },
  {
    icon: "/icons/MySQL.svg",
    name: "MySQL",
  },
  {
    icon: "/icons/Bootstrap.svg",
    name: "Bootstrap",
  },
  {
    icon: "/icons/HTML.svg",
    name: "HTML",
  },
  {
    icon: "/icons/CSS.svg",
    name: "CSS",
  },
  {
    icon: "/icons/Github.svg",
    name: "Github",
  },
  {
    icon: "/icons/Figma.svg",
    name: "Figma",
  },
  {
    icon: "/icons/Illustrator.svg",
    name: "Illustrator",
  },
  {
    icon: "/icons/Photoshop.svg",
    name: "Photoshop",
  },
];

function TechLogo({ icon, name }) {
  return (
    <>
      <div className="flex flex-col justify-center w-full text-center items-center gap-2 md:gap-4">
        <img
          src={icon}
          className="w-6 md:w-14 max-h-6 md:max-h-14 hover:-translate-y-1  transition duration-200"
          alt=""
        />
        <p className="text-[8px] md:text-base">{name}</p>
      </div>
    </>
  );
}

function TechStack() {
  return (
    <>
      <div className="text-white pt-20 md:pt-34 pb-30 md:pb-46 w-full z-20" id="TechStack">
        <div className="text-center flex flex-col gap-1 md:gap-2 mx-14">
          <h2 className="text-3xl md:text-6xl font-medium">Tech Stack</h2>
          <p className="text-sm md:text-[16px] font-light">
            The technologies I use to design and develop digital products.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-6 md:gap-12 mt-10 md:mt-20 mx-12 md:mx-64 bg-linear-to-br from-[#BFBFBF]/8 to-[#595959]/5 p-6 md:p-12 rounded-lg border border-white/10">
          {techStack.map((techStack) => (
            <TechLogo
              key={techStack.name}
              icon={techStack.icon}
              name={techStack.name}
            ></TechLogo>
          ))}
        </div>
      </div>
    </>
  );
}

export default TechStack;
