import React, { Component } from "react";

import Axios from "axios";

class Leaderboards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  async componentDidMount() {
    Axios.get("https://api.pennybankapi.online/api/Children/topXpEarners/10")
      .then((response) => {
        console.log(response.data);
        this.setState({ users: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  listItems = () =>
    this.state.users.map((users, index) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            padding: 10,
            backgroundColor: index%2 == 0 ? "gainsboro" : "white"
          }}
          key={users.id}
        >
          <h3>{String(index + 1)}.</h3>
          <img
            src={
              users.avatar.avatarLink
                ? users.avatar.avatarLink
                : require("../assets/images/pennybankplusicon.png")
            }
            style={{
              backgroundColor: users.avatar.avatarColor
                ? users.avatar.avatarColor
                : "#20B2AA",
              margin: 3,
            }}
            className="image avatar avatar-64 rounded-circle"
            alt="Avatar"
          />
          <p>{users.username}</p>
          <h2>{String(users.gameAccount.xpScore)}</h2>
        </div>
      );
    });

  render() {
    return this.listItems();
  }
}

export default Leaderboards;
