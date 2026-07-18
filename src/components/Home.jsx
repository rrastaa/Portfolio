function Home() {
  return (
    <>
      <div className="">
        <div
          className="relative m-4 md:m-8 rounded-lg border  border-[#F2EFE9]/20 z-10 "
          id="Home"
        >
          <img src="/mobilehome.webp" className=" block sm:hidden md:hidden w-full rounded-lg blur-[10%] h-[85vh]" alt="" />
          <img src="/finalhome.webp" className=" hidden sm:block md:block w-full md:h-[91vh] " alt="" />

          <img
            src="MainName.svg"
            className="maintitle absolute w-[60vw] top-[30%] left-[10%] md:top-1/4 md:left-16 md:w-150 "
            alt=""
          />

          <img
            src="cursor.png"
            className="maincursor absolute w-15 md:w-25 top-[35%] left-[80%]   md:top-[35%] md:left-[50%]"
            alt=""
          />
          <p className="maindesc absolute max-w-70 md:max-w-130 top-[50%] ml-[10%] md:top-4/6 md:right-16 text-white font-normal text-xs md:text-[16px] text-justify">
            I'm a UI/UX Designer and aspiring Front-End Developer with a passion
            for designing clean, modern, and user-friendly digital products. I
            enjoy learning new technologies and turning creative ideas into real
            experiences.
          </p>
          <div className="absolute right-[10%] bottom-[5%] md:bottom-[10%] md:left-16 text-white text-xs md:text-base flex gap-4 md:gap-8 uppercase">
            <p>Frontend Developer</p>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
