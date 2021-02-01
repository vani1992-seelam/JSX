// mport the Rect and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create react component
const App = () => {
  //using variable for button
  const buttonText = { text: "Click me" };
  const labelText = "Enter Name:";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};
// Take the react component and display on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
