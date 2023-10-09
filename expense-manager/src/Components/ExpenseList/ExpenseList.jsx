import { ExpenseEntry } from "../ExpenseEntry/ExpenseEntry";

export function ExpenseList(props) {
  //   const ListItem = props.expenses.map((expense) => (
  //     <Expense key={expense.id} user={expense} />
  //   ));
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Dscription</th>
            <th scope="col">Amount</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.expenses.map((expense) => (
            <ExpenseEntry key={expense.id} user={expense} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
