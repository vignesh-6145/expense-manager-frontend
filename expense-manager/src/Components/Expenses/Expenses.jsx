import { useParams } from "react-router-dom";

export function Expenses() {
  const { userId } = useParams();
  return <InternalExpenses userId={userId} />;
}

class InternalExpenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, expenses: [] };
  }

  componentDidMount() {
    getUser(this.props.userId)
      .then((response) => {
        this.setState({ user: response.data });
      })
      .catch((err) => console.log(err))
      .finally(console.log("done"));
    getExpenses(this.props.userId)
      .then((resp) => {
        this.setState({
          expenses: [...resp.data._embedded.expenseList],
        });
      })
      .catch((err) => console.log(err))
      .finally(console.log("done"));
  }
  render() {
    //trying to retrive the leng th of the expenseList

    return (
      <div>
        <h1 className="display-5">
          {" "}
          Hi {this.state.user.userName} you had {this.state.expenses.length}{" "}
          Expenses
        </h1>
        {this.state.expenses.length != 0 && (
          <ExpenseList
            expenses={this.state.expenses}
            userId={this.state.user.userId}
          />
        )}
      </div>
    );
  }
}
