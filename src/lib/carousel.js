import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { i: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.wait(), 2000);
  }

  wait() {
    let { i } = this.state;
    let len = this.props.carDiv.length - 2;
    let new_i = i > len ? 0 : i + 1;
    this.setState({ i: new_i });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    let { i } = this.state;
    return <>{this.props.carDiv[i]}</>;
  }
}

export default Carousel;
