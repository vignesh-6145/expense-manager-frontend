import React from "react";
import { getUser } from "../../Services/UserService";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let id = this.props.userId;
    let user = getUser(id);
    this.setState(user);
  }
  render() {
    return (
      <div>
        <h1>
          Welcome {this.state.userName} {this.state.userId}
        </h1>
      </div>
    );
  }
}
export default Home;
