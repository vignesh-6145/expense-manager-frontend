import { Welcome } from "../Welcome/Welcome";

export function ExpenseManger() {
  return (
    <div className="container">
      <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand ms-6 fs-2 fw-bold text-black" href="#">
                Expense Manager
              </a>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item fs-5">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item fs-5">
                    <a className="nav-link" href="#">
                      Expenses
                    </a>
                  </li>
                  <li className="nav-item fs-5">
                    <a className="nav-link" href="#">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item fs-5">
                    <a className="nav-link" href="#">
                      Profile
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="navbar-nav">
                <li className="nav-item fs-5">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </li>
                <li className="nav-item fs-5">
                  <a className="nav-link" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Welcome />
    </div>
  );
}
