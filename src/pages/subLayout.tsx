import { NavLink } from "react-router-dom";

const SubLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li className="nav-item">
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default SubLayout;
