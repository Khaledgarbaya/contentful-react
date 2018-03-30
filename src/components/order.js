import React from "react";

class Order extends React.Component {
  render() {
    return <button onClick={this.props.onQueryChange}> test </button>;
  }
}

export default Order;
