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
