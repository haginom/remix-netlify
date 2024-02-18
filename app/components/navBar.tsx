import { NavLink, useLocation } from "react-router-dom";

export const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <nav className="flex justify-between items-center landing-page-info">
        <NavLink to="/" className="nav-bar__logo_container flex ">
          <div className="flex ">
            <h1 className="font-thin antialiased md:ml-5 lowercase tracking-wider text-5xl md:text-6xl	 ">
              Saki Reid
            </h1>
          </div>
        </NavLink>
        <div className="nav-bar__nav-items flex font-thin flex-col text-right tracking-wider">
          <NavLink to="/portfolio">Work</NavLink>
          <NavLink to="portfolio#contact-about">
            About <span className="hide">&darr;</span>
          </NavLink>
          <NavLink to="portfolio#contact-about">
            Contact <span className="hide">&darr;</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
