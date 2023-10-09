export function ExpenseEntry(props) {
  return (
    <tr>
      <th scope="row">{props.user.id}</th>
      <td>{props.user.description}</td>
      <td>{props.user.amount}</td>
      <td>
        <a className="btn btn-warning me-1">Update</a>
        <a className="btn btn-danger ms-1">Delete</a>
      </td>
    </tr>
  );
}
