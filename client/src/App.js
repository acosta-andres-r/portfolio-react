import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Navigation/Toolbar/Toolbar";
import SideDrawer from "./components/Navigation/SideDrawer/SideDrawer"
import Footer from "./components/Footer/Footer"

function App() {

  // Setting our component's initial state
  const [showSideDrawer, setShowSideDrawer] = useState(false)


  const sideDrawerClosedHandler = () => {
    setShowSideDrawer( false );
  }

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  }

  return (
    <Router>
      <div className={'Container'}>
        <Nav drawerToggleClicked={sideDrawerToggleHandler} />
        <SideDrawer
          open={showSideDrawer}
          closed={sideDrawerClosedHandler}
        />
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route exact path={"/portfolio"}>
            <Portfolio />
          </Route>
          <Route exact path={"/contact"}>
            <Contact />
          </Route>
          {/* <Route exact path="/books/:id">
            <Detail />
          </Route> */}
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
