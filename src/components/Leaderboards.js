import React, { Component } from "react";

import Axios from "axios";

class Leaderboards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{ name: "Test", score: 0 }],
      paginate: 10,
    };
  }
  async componentDidMount() {
    Axios.get("https://api.pennybankapi.online/api/Children/topXpEarners/10")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="string">
        
      </div>
    );
  }
}

export default Leaderboards;
