"use strict";

var visibility = false;

var toggleDisplay = function toggleDisplay() {
  visibility = !visibility;
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
    visibility && React.createElement(
      "p",
      null,
      "This is some text that will hide and unhide"
    )
  );

  ReactDOM.render(template, document.getElementById("app"));
};

render();
