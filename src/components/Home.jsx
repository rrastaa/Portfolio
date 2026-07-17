function Home() {
  return (
    <>
      <div
        className="relative m-8 rounded-lg border border-[#F2EFE9]/20 z-10 "
        id="Home"
      >
        <img src="/finalhome.webp" className="w-full h-[91vh] " alt="" />

        <img
          src="MainName.svg"
          className="absolute top-1/4 left-16 w-150 "
          alt=""
        />

        <img
          src="cursor.svg"
          className="absolute top-[35%] left-[50%]"
          alt=""
        />
        <p className="absolute max-w-130 top-4/6 right-16 text-white font-normal text-[16px] text-justify">
          I'm a UI/UX Designer and aspiring Front-End Developer with a passion
          for designing clean, modern, and user-friendly digital products. I
          enjoy learning new technologies and turning creative ideas into real
          experiences.
        </p>
        <div className="absolute bottom-[10%] left-16 text-white flex gap-8 uppercase">
          <p>Frontend Developer</p>
          <p>UI/UX Designer</p>
        </div>
      </div>
    </>
  );
}

export default Home;
