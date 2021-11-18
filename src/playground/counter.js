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

  handleAddOne() {
    // console.log("increase");
    this.setState({ count: this.state.count + 1 });
  }
  handleMinusOne() {
    // console.log("decrease");
    this.setState({ count: this.state.count - 1 });
  }
  handleReset() {
    // console.log("reset");
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

// let count = 0;

// const increment = () => {
//   count += 1;
//   console.log("increment", count);
//   renderCounterApp();
// };

// const decrement = () => {
//   count -= 1;
//   console.log("decrement");
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   console.log("reset");
//   renderCounterApp();
// };

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, app);
// };

// renderCounterApp();
