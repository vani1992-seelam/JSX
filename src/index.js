// mport the Rect and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

function getButtonText() {
  return "Click on Me!";
}
// Create react component
const App = () => {
  const buttonText = "Click Me!";
  return (
    <div>
      <label className="label" for="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText} //using variable
        {getButtonText()} //using function
      </button>
    </div>
  );
};
// Take the react component and display on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
