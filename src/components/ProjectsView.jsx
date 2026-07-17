const project = [
  {
    title: "Mentory",
    logo: "/mentory/mentorylogo.svg",
    focus: "Full-Stack Developer & UI/UX Designer",
    desc: "Developed a full-stack appointment management platform for students and lecturers. Designed the user interface and builtfeatures for appointment scheduling, authentication, andresponsive user experiences.",
    mainImage: "/mentory/mentorydashboard.webp",
    moreImage: [
      "/mentory/makeappointment.webp",
      "/mentory/profilementory.webp",
    ],
  },
  {
    title: "L'ORVIERE",
    logo: "/lorviere/lorvierelogo.svg",
    focus: "UI/UX Designer",
    desc: "Designed the complete UI/UX for a modern skincare brand website with a focus on usability and visual consistency. Created wireframes, high-fidelity prototypes, and a responsive interface that reflects the brand's identity.",
    mainImage: "/lorviere/lorvieredash.webp",
    moreImage: ["/lorviere/lorviereshop.webp", "/lorviere/lorvieredetail.webp"],
  },
  {
    title: "OrderIn",
    logo: "/orderin/orderinlogo.svg",
    focus: "Full-Stack Developer & UI/UX Designer",
    desc: "Designed the complete UI/UX for a modern skincare brand website with a focus on usability and visual consistency. Created wireframes, high-fidelity prototypes, and a responsive interface that reflects the brand's identity.",
    mainImage: "/orderin/orderindashboard.webp",
    moreImage: [
      "/orderin/assignproduct.webp",
      "/orderin/productionprogress.webp",
      "/orderin/assignworker.webp",
    ],
  },
];

function ProjectCard({ title, logo, focus, desc, mainImage, moreImage }) {
  return (
    <>
      <div className="flex flex-row gap-8 bg-linear-to-br from-[#BFBFBF]/8 to-[#595959]/5 p-8 rounded-lg border border-white/10">
        <img
          src={mainImage}
          className="max-w-[50vw] max-h-[70vh] rounded hover:brightness-100  hover:scale-102 transition duration-200"
          alt=""
        />
        <div className="flex flex-col gap-8">
          <div className="flex flex-row items-center gap-3">
            <img src={logo} className="max-w-14 max-h-10" alt="" />
            <div className="flex flex-col gap-">
              <h3 className="text-2xl font-medium">{title}</h3>
              <p className="font-normal text-sm"> {focus}</p>
            </div>
          </div>
          <p className="text-justify text-normal font-normal">{desc}</p>
          <div className="flex gap-8">
            {moreImage.map((more) => (
              <div key={more} className="flex-1">
                <img
                  src={more}
                  className="rounded-xs h-full hover:scale-102 transition duration-200"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function ProjectsView() {
  return (
    <>
      <div className="text-white text-start pt-12 h-full mx-12 flex flex-col gap-20 z-10" id="ProjectView">
        <div className="flex flex-col gap-2">
          <h2 className=" text-6xl font-medium">Featured Projects</h2>
          <p className="text-[16px] font-light">
            A selection of projects that showcase my skills and experience.
          </p>
        </div>
        <div className="flex flex-col gap-20">
          {project.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              logo={project.logo}
              focus={project.focus}
              desc={project.desc}
              mainImage={project.mainImage}
              moreImage={project.moreImage}
            ></ProjectCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsView;
