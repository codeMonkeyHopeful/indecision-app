let toggleIndicator = false;

const toggleDisplay = () => {
  toggleIndicator = !toggleIndicator;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDisplay}>Show Detials</button>
      {toggleIndicator && <p>This is some text that will hide and unhide</p>}
    </div>
  );
  const root = document.getElementById("app");

  ReactDOM.render(template, root);
};

render();
