console.log("working");

const app = {
  title: "Indecision App",
  subtitle: "Let the program take you on a journey",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);

    e.target.elements.option.value = "";
    renderTemplate();
  }
};

const numbers = [1, 2, 3];

const removeAll = () => {
  app.options = [];
  renderTemplate();
};

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}!</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length ? "Here are your options:" : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove All</button>

      <ol>
        {app.options.map((option, index) => {
          return <li key={index}>{option}</li>;
        })}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button type="submit">Add Option</button>
      </form>
    </div>
  );

  const root = document.getElementById("app");

  ReactDOM.render(template, root);
};

renderTemplate();
