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
            <ExpenseEntry
              key={expense.id}
              expense={expense}
              userId={props.userId}
            />
          ))}
          <tr>
            <th></th>
            <th>Total Amount</th>
            <td>{"<SUM>"}</td>
            <td> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
