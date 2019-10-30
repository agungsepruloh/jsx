// import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// create a react component
const App = () => {
    return (
        <div>
            {/* giving class name and reference with jsx */}
            <label className="label" htmlFor="name">
                Enter your name:
            </label>
            <input id="name" type="text" />
            {/* inline styling with jsx */}
            <button style={{ backgroundColor: "blue", color: "white" }}>
                Submit
            </button>
        </div>
    );
};

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
