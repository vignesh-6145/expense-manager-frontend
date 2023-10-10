import { useEffect, useState } from "react";
import { ExpenseEntry } from "../ExpenseEntry/ExpenseEntry";
import { summaryTotalAmount } from "../../Services/SummaryService";

export function ExpenseList(props) {
  //   const ListItem = props.expenses.map((expense) => (
  //     <Expense key={expense.id} user={expense} />
  //   ));
  const [sum, setSum] = useState(0);
  const [label, setLabel] = useState("Label");
  useEffect(() => {
    summaryTotalAmount(props.userId).then((resp) => {
      setSum(resp.data.statistic);
      setLabel(resp.data.description);
    });
  }, []);
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
            <th>{label}</th>
            <td>{sum}</td>
            <td> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
