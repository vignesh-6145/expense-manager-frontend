import { Link } from "react-router-dom";
import "./Welcome.css";
export function Welcome() {
  return (
    <div className="container">
      <span className="display-3 ">Welcome to Expense Manager</span>
      <br />
      <Link to="/expenses" className="link-success">
        Goto Expenses
      </Link>
    </div>
  );
}
