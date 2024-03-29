import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <span
              className="navbar-brand ms-6 fs-2 fw-bold text-black"
              href="#"
            >
              Expense Manager
            </span>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item fs-5">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item fs-5">
                  <Link className="nav-link" to="/expenses">
                    Expenses
                  </Link>
                </li>
                <li className="nav-item fs-5">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item fs-5">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item fs-5">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item fs-5">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
