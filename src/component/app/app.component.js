import React, { Component } from "react";
import Main from "../main.component";
import { AppContainer } from "./app.styled";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Main />
      </AppContainer>
    );
  }
}

export default App;
