class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Let the computer take control</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What Should I Do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <ol>
        <Option />
        <Option />
      </ol>
    );
  }
}

class Option extends React.Component {
  render() {
    return <li>Option component here</li>;
  }
}
class AddOption extends React.Component {
  render() {
    return (
      <form>
        <div>I am the form</div>
      </form>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
