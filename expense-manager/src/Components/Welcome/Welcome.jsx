import "./Welcome.css";
export function Welcome() {
  return (
    <div className="container">
      <span className="display-3 ">Welcome to Expense Manager</span>
      <br />
      <a href="/Login" className="link-success">
        {" "}
        Goto Expenses
      </a>
    </div>
  );
}
