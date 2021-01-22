import React from "react";

let i = 0;
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChild: this.props.carDiv[0],
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.wait(), 4000);
  }

  wait() {
    let x = this.props.carDiv;
    i = i === x.length - 1 ? 0 : i + 1;
    this.setState({ currentChild: this.props.carDiv[i] });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <>{this.state.currentChild}</>;
  }
}

export default Carousel;
