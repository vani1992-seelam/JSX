// mport the Rect and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create react component
const App = () => {
  //using variable for button
  const buttonText = "Click Me!";
  const buttonText = { text: "Click me" };
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
        {buttonText.text}
      </button>
    </div>
  );
};
// Take the react component and display on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
