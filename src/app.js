class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

    this.state = {
      options: [],
    };
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.options.length != prevState.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("componentWIllUnmount");
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(option) {
    console.log("hdo", option);
    this.setState((prevState) => ({
      options: prevState.options.filter((prevOption) => {
        return option !== prevOption;
      }),
    }));
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter a valid option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists!";
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }
  handlePick() {
    const integer = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[integer];
    alert(option);
  }

  render() {
    const title = "Indecision";
    const subTitle = "Let the computer take control!!";

    return (
      <div>
        <Header subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision",
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What Should I Do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>

      <ol>
        {props.options.map((option, index) => {
          return (
            <Option
              option={option}
              key={index}
              handleDeleteOption={props.handleDeleteOption}
            />
          );
        })}
      </ol>
    </div>
  );
};

const Option = (props) => {
  return (
    <li>
      {props.option}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.option);
        }}
      >
        Delete
      </button>
    </li>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
