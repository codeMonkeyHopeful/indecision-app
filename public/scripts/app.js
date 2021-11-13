"use strict";

console.log("working");

var task = {
  title: "Kiwi",
  subtitle: "Take for walk",
  options: ["One", "Two"]
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  console.log(option);
  if (option) {
    task.options.push(option);
    e.target.elements.option.value = "";
  }
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
  ),
  React.createElement(
    "form",
    { onSubmit: onFormSubmit },
    React.createElement("input", { type: "text", name: "option" }),
    React.createElement(
      "button",
      { type: "submit" },
      "Add Option"
    )
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

var app = document.getElementById("app");

ReactDOM.render(template, app);
