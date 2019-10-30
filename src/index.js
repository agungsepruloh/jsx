// import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

function getTime() {
    return new Date().toLocaleTimeString();
}

// create a react component
const App = () => {
    return (
        <center>
            <div style={{ marginTop: "250px" }}>Current Time</div>
            {/* referencing js variable or js function in JSX */}
            <h3>{getTime()}</h3>
        </center>
    );
};

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
