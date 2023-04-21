import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/results">Results</NavLink>
        <NavLink to="/results/news">News</NavLink>
        <NavLink to="/results/music">Music</NavLink>
        <NavLink to="/results/pictures">Pictures</NavLink>
      </nav>
    </header>
  );
}
