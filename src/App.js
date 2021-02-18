import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";

import IndexPage from "./pages/index";
import JoinUs from "./pages/join-us";
import JoinBlanche from "./pages/join-blanche";
import Contact from "./pages/contact";
import Creator from "./pages/creator";
import Company from "./pages/company";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/home" component={IndexPage} />
        <Route path="/join-us" component={JoinUs} />
        <Route path="/join-blanche" component={JoinBlanche} />
        <Route path="/contact" component={Contact} />
        <Route path="/creator" component={Creator} />
        <Route path="/company" component={Company} />
      </Switch>
    </Router>
  );
}

export default App;
