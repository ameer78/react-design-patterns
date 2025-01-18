import React from "react";
import UserProfileContainer from "./Containers/UserProfileContainer";
import "./App.css";
import Counter from "./Component/Counter";

const App: React.FC = () => (
  <div style={{ textAlign: "center", width: "100%" }}>
    <h1>React Design Patterns:</h1>
    <div
      className="container"
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "2rem",
        margin: "auto",
      }}
    >
      <h2> Container and Presentation</h2>
      <UserProfileContainer />
    </div>
    <div className="container">
      <h2>Component Composition with Hooks</h2>
      <Counter />
    </div>
  </div>
);

export default App;
