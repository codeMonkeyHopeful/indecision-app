console.log("working");

const task = {
  title: "Kiwi",
  subtitle: "Take for walk",
  options: ["One", "Two"],
};
const template = (
  <div>
    <h1>{task.title}!</h1>
    {task.subtitle && <p>{task.subtitle}</p>}
    <p>{task.options.length ? "Here are your options:" : "No options"}</p>
  </div>
);

const user = {
  name: "Ryan",
  age: 36,
  city: "Seattle",
};

const getLocation = (location) => {
  return location ? <p>Location: {location}</p> : undefined;
};

const userTemplate = (
  <div>
    <h1>{user.name}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}

    {getLocation(user.city)}
  </div>
);

const app = document.getElementById("app");

ReactDom.render(template, app);
