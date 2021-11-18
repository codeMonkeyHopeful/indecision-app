class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subTitle = "Let the computer take control!!";
    const options = [1, 2, 3];
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handleClick() {
    console.log("handleClickAction");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>What Should I Do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log("Remove All");
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        <ol>
          {this.props.options.map((option, index) => {
            return <Option option={option} key={index} />;
          })}
        </ol>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <li>{this.props.option}</li>;
  }
}
class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    if (e.target.elements.option.value.trim()) {
      console.log(e.target.elements.option.value);
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
