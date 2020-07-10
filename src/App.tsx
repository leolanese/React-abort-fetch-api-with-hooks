import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NewsAbortingRequest from "./NewsAbortingRequest";
import NewsRequest from "./NewsRequest";

import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';


const LandingPage = () => {
  const [showAbort, toggleShowAbort] = useState(false);
  const [show, toggleShow] = useState(false);

  function toggleAbort() {
    toggleShowAbort(!showAbort);
  }

  function toggle() {
    toggleShow(!show);
  }

  return (
    <>
      <div>
        {/* you should NOT see the error */}
        <button type="button" className="btn btn-danger" onClick={toggleAbort}>Toggle View Component (Abort)</button>
        {showAbort && <NewsAbortingRequest term="c6f13b093e4b429aa4e86d7eff4f42a4" division="bbc-news" />}

        {/* you should see the error: index.js:1 Warning: Can't perform a React state update on an unmounted component... */}
        <button type="button" className="btn btn-success" onClick={toggle}>Toggle View Component</button>
        {show && <NewsRequest term="c6f13b093e4b429aa4e86d7eff4f42a4" division="bbc-news" />}
      </div>
    </>
  )
};

const App = () => {
  return (
    <section className="App">
      <Router>
        <main>
          {/* Use a <Switch> any time we have multiple routes, but you want only one of them to render at a time */}
          <Switch>
            {/* React Router v5 using "exact" inclusive routing */}
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </main>
      </Router>
    </section>
  );
};

export default App;
