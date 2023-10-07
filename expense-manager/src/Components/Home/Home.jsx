import React from "react";
import { getUser } from "../../Services/UserService";
import { Link, useParams } from "react-router-dom";

export function Home() {
  const params = useParams();
  return <InternalHome params={params} />;
}

class InternalHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // console.log(this.props);
    let id = this.props.params.userId;
    getUser(id)
      .then((response) => {
        console.log(response.data);
        this.setState(response.data);
      })
      .catch((err) => console.log(err))
      .finally(console.log("done"));
    // let user = getUser(this.props.params.userId);
  }
  render() {
    return (
      <div>
        <h1 className="display-2">Welcome {this.state.userName}</h1>
        <span className="text-sm-center">
          Hope you are having a great financial year
        </span>
        <br />

        <p class="m-5">
          view my{" "}
          <Link className="link-warning" to={`/expenses/${this.state.userId}`}>
            expenses
          </Link>
        </p>
      </div>
    );
  }
}
