class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    //grab from local - convert and check
    try {
      const count = JSON.parse(localStorage.getItem("count"));
      if (!isNaN(parseInt(count))) {
        this.setState(() => ({ count }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    //save to local - convert and check!
    try {
      if (prevState.count !== this.state.count) {
        const count = this.state.count;
        if (!isNaN(parseInt(count))) {
          localStorage.setItem("count", count);
        }
      }
    } catch (e) {}
  }
  handleAddOne() {
    // console.log("increase");
    this.setState({ count: this.state.count + 1 });
  }
  handleMinusOne() {
    // console.log("decrease");
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  handleReset() {
    this.setState({ count: 0 });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>Increment</button>
        <button onClick={this.handleMinusOne}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
