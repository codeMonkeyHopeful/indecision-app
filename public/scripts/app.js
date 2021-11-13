"use strict";

console.log("working");

var task = {
  title: "Kiwi",
  subtitle: "Take for walk",
  options: ["One", "Two"]
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    task.title,
    "!"
  ),
  task.subtitle && React.createElement(
    "p",
    null,
    task.subtitle
  ),
  React.createElement(
    "p",
    null,
    task.options.length ? "Here are your options:" : "No options"
  )
);

var user = {
  name: "Ryan",
  age: 36,
  city: "Seattle"
};

var getLocation = function getLocation(location) {
  return location ? React.createElement(
    "p",
    null,
    "Location: ",
    location
  ) : undefined;
};

var userTemplate = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.city)
);

var count = 0;

var increment = function increment() {
  count += 1;
  console.log("increment", count);
  renderCounterApp();
};

var decrement = function decrement() {
  count -= 1;
  console.log("decrement");
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  console.log("reset");
  renderCounterApp();
};

var app = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: increment },
      "Increment"
    ),
    React.createElement(
      "button",
      { onClick: decrement },
      "Decrement"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "Reset"
    )
  );
  ReactDOM.render(templateTwo, app);
};

renderCounterApp();
