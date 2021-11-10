import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return <div className="Header">
      <nav>
        <h1>Matthew Laude</h1>
        <div className="links">
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/about">
            <div>About</div>
          </Link>
          <Link to="/projects">
            <div>Projects</div>
          </Link>
          <a href="https://github.com/mlaude1" target="_blank">GitHub <i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/matthew-laude-909a00141/" target="_blank">Linked <i class="fab fa-linkedin"></i></a>
        </div>
      </nav>
    </div>
}

export default Header;