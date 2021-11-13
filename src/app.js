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

let count = 0;

const increment = () => {
  count += 1;
  console.log("increment", count);
  renderCounterApp();
};

const decrement = () => {
  count -= 1;
  console.log("decrement");
  renderCounterApp();
};

const reset = () => {
  count = 0;
  console.log("reset");
  renderCounterApp();
};

const app = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, app);
};

renderCounterApp();
