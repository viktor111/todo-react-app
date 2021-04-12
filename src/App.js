import React from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import InfoDisplay from "./components/InfoDisplay";

class App extends React.Component {
  render() {

    return (
      <div class="App">
        <InfoDisplay/>
        <ToDo />
      </div>
    );
  }
}

export default App;
