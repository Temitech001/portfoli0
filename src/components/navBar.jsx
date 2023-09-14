const NavBar = () => {
  return (
    <nav className="   bg-slate-500 justify-between px-20 py-5 items-center lg:flex  w-screen">
      <div className=" font-semibold text-2xl md:text-3xl text-slate-50">
        Temi
      </div>
      <div>
        <ul className=" hidden lg:flex gap-5 mr text-white">
          <li>Resume</li>
          <li>About</li>
          <li>Experience</li>
          <li>Tech Stack</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
