import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Testimonials from "./components/Testimonials";
import Kitchen from "./components/Portfolio/kitchen";
import Bathroom from "./components/Portfolio/bathroom";
import Bedroom from "./components/Portfolio/bedroom";
import LivingArea from "./components/Portfolio/livingArea";
import "./app.css";

function App() {
  return (
    <div className="App">
      <h1>Yasha Design Studio</h1>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/testimonials" component={Testimonials} />
        <Route exact path="/portfolio-kitchen" component={Kitchen} />
        <Route exact path="/portfolio-bathroom" component={Bathroom} />
        <Route exact path="/portfolio-bedroom" component={Bedroom} />
        <Route exact path="/portfolio-livingArea" component={LivingArea} />
      </Switch>
    </div>
  );
}

export default App;
