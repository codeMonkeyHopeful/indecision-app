"use strict";

console.log("working");

var app = {
  title: "Indecision App",
  subtitle: "Let the program take you on a journey",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);

    e.target.elements.option.value = "";
    renderTemplate();
  }
};

var numbers = [1, 2, 3];

var removeAll = function removeAll() {
  app.options = [];
  renderTemplate();
};

var onMakeDecision = function onMakeDecision() {
  console.log("make decision");
  var dex = Math.floor(Math.random() * app.options.length);
  //   console.log(app.options[dex]);
  alert(app.options[dex]);
};

var renderTemplate = function renderTemplate() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title,
      "!"
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length ? "Here are your options:" : "No options"
    ),
    React.createElement(
      "button",
      { onClick: onMakeDecision },
      "What should I do?"
    ),
    React.createElement(
      "button",
      { onClick: removeAll },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option, index) {
        return React.createElement(
          "li",
          { key: index },
          option
        );
      })
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

  var root = document.getElementById("app");

  ReactDOM.render(template, root);
};

renderTemplate();
