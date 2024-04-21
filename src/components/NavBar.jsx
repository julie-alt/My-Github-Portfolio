import { Link } from "react-router-dom";
import logo from "../assets/git2.png";
import home from "../assets/home2.png";
import search from "../assets/search.png";
import more from "../assets/more.png";

function NavBar() {
  return (
    <nav>
      <img src={logo} alt="logo" className="logo" />
      <ul className="nav-box">
        <li className="nav-bar">
          <img src={home} alt="home" />
          <Link className="link-style" to="/">
            Home
          </Link>
        </li>
        <li className="nav-bar">
          <img src={search} alt="search" />
          <Link className="link-style" to="/search">
            Search
          </Link>
        </li>
        <li className="nav-bar">
          <img src={more} alt="search" />
          <a className="link-style" href="/Error404">
            More
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
