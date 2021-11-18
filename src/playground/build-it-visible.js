class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleToggleVisibility() {
    this.setState((preState) => {
      return {
        visibility: !preState.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide Text" : "Show Text"}
        </button>
        {this.state.visibility && <p>i am the thing to hide</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let visibility = false;

// const toggleDisplay = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleDisplay}>
//         {visibility ? "Hide Details" : "Show Details"}
//       </button>
//       {visibility && <p>This is some text that will hide and unhide</p>}
//     </div>
//   );

//   ReactDOM.render(template, document.getElementById("app"));
// };

// render();
