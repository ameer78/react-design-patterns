import React from "react";
import UserProfileContainer from "./Containers/UserProfileContainer";
import "./App.css";

const App: React.FC = () => (
  <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem", margin:"auto" }}>
    <h1>React Design Patterns: Container and Presentation</h1>
    <UserProfileContainer />
  </div>
);

export default App;
