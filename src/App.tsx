import React from "react";
import UserProfileContainer from "./Containers/UserProfileContainer";
import "./App.css";
import Counter from "./Component/Counter";

const App: React.FC = () => (
  <>
    <div>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          padding: "2rem",
          margin: "auto",
        }}
      >
        <h1>React Design Patterns: Container and Presentation</h1>
        <UserProfileContainer />
      </div>
      <h1>Component Composition with Hooks</h1>
      <Counter />
    </div>
  </>
);

export default App;
