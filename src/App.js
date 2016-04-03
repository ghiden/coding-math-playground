import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

import Episodes from './episodes';

const Home = () =>
  <div className="home">
    <h1>Coding Math Playground</h1>
    <h2><a href="https://www.patreon.com/codingmath">Coding Math</a></h2>
    <Links />
  </div>;

const Links = () =>
  <nav>
    { Episodes.map((ep, i) => <Link key={i} to={ep.path}>{ep.comp.title}</Link>) }
  </nav>

class App extends React.Component {
  render() {
    const routes = [
      {path: '/', comp: Home},
      ...Episodes
    ];
    return (
        <Router history={ hashHistory }>
          { routes.map((r, i) => <Route key={i} path={r.path} component={r.comp}></Route>) }
        </Router>
    );
  }
}

export default App;
