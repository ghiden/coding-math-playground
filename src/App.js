import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

import Ep1 from './episodes/ep1';
import Ep2 from './episodes/ep2';
import Ep3 from './episodes/ep3';

const Home = () =>
  <div className="home">
    <h1>Coding Math Playground</h1>
    <h2><a href="https://www.patreon.com/codingmath">Coding Math</a></h2>
    <Links />
  </div>;

const Links = () =>
  <nav>
    <Link to="/ep1">Episode 1: Introduction</Link>
    <Link to="/ep2">Episode 2: Intro to Trigonometry</Link>
    <Link to="/ep3">Episode 3: More Trigonometry</Link>
  </nav>

class App extends React.Component {
  render() {
    return (
        <Router history={ hashHistory }>
          <Route path="/" component={Home}></Route>
          <Route path="/ep1" component={Ep1}></Route>
          <Route path="/ep2" component={Ep2}></Route>
          <Route path="/ep3" component={Ep3}></Route>
        </Router>
    );
  }
}

export default App;
