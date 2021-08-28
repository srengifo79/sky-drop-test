import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
