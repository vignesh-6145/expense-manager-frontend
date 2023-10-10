import { Link } from "react-router-dom";
import { deleteExpense } from "../../Services/ExpenseService";

export function ExpenseEntry(props) {
  function handleDelete() {
    deleteExpense(props.userId, props.expense.id)
      .then(window.location.reload(false))
      .catch((err) => console.log(err))
      .finally(console.log("done"));
  }
  return (
    <tr>
      <th scope="row">{props.expense.id}</th>
      <td>{props.expense.description}</td>
      <td>{props.expense.amount}</td>
      <td>
        <Link
          to={`/users/${props.userId}/update/${props.expense.id}`}
          className="btn btn-warning me-1"
        >
          Update
        </Link>
        <button onClick={handleDelete} className="btn btn-danger ms-1">
          Delete
        </button>
      </td>
    </tr>
  );
}
