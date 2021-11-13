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
    console.log(app.options);
    e.target.elements.option.value = "";
    renderTemplate();
  }
};

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}!</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length ? "Here are your options:" : "No options"}</p>
      <p>{app.options.length}</p>
      <ul>
        {app.options.map((option, dex) => (
          <li key={dex}>{option}</li>
        ))}
      </ul>

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
