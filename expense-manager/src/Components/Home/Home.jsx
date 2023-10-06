import React from "react";
import { getUser } from "../../Services/UserService";
import { useParams } from "react-router-dom";

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
        <h1>Welcome {this.state.userId}</h1>
      </div>
    );
  }
}
