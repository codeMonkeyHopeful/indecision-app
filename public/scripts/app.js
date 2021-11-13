"use strict";

var toggleIndicator = false;

var toggleDisplay = function toggleDisplay() {
  toggleIndicator = !toggleIndicator;
  render();
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: toggleDisplay },
      "Show Detials"
    ),
    toggleIndicator && React.createElement(
      "p",
      null,
      "This is some text that will hide and unhide"
    )
  );
  var root = document.getElementById("app");

  ReactDOM.render(template, root);
};

render();
