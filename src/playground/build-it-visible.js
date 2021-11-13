let visibility = false;

const toggleDisplay = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDisplay}>Show Detials</button>
      {visibility && <p>This is some text that will hide and unhide</p>}
    </div>
  );

  ReactDOM.render(template, document.getElementById("app"));
};

render();
