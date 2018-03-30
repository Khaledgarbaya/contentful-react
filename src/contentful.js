import React from "react";
import PropTypes from "prop-types";
import { createClient } from "contentful";
import { withProps } from "./utils";

class Contentful extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = { response: {}, query: {} };
    this.updateClient(props.space, props.accessToken, props.host);
    this.onQueryChange = this.onQueryChange.bind(this);
  }
  componentDidMount() {
    this.client.getEntries({ query: this.state.query }).then(response => {
      this.setState({ response });
    });
  }
  onQueryChange(query) {
    console.log("query Changed");
  }

  updateClient(space, accessToken, host) {
    this.client = createClient({ space, accessToken, host });
  }

  render() {
    return (
      withProps(this.props.children, { onQueryChange: this.onQueryChange }) ||
      null
    );
  }
}

export default Contentful;
