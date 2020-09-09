import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <h1>Yasha Design Studio</h1>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
