import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Kitchen from "./components/Work/kitchen";
import Bathroom from "./components/Work/bathroom";
import Bedroom from "./components/Work/bedroom";
import LivingArea from "./components/Work/livingArea";

function App() {
  return (
    <div className="App">
      <h1>Yasha Design Studio</h1>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/work-kitchen" component={Kitchen} />
        <Route exact path="/work-bathroom" component={Bathroom} />
        <Route exact path="/work-bedroom" component={Bedroom} />
        <Route exact path="/work-livingArea" component={LivingArea} />
      </Switch>
    </div>
  );
}

export default App;
