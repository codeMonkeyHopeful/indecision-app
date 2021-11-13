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
    console.log(app.options);
    e.target.elements.option.value = "";
    renderTemplate();
  }
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
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "ul",
      null,
      app.options.map(function (option, dex) {
        return React.createElement(
          "li",
          { key: dex },
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
