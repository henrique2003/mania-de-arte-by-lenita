import React from 'react';

import './base.scss';

//React-router
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

//Redux
// import { Provider } from 'react-redux';

//Components Layout
import Header from './components/Header';
import Home from './components/Home';
import Woods from './components/Woods'
import Crochet from './components/Crochet'
import Asks from './components/Asks'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/madeiras" exact component={Woods} />
        <Route path="/croche" exact component={Crochet} />
        <Route path="/duvidas" exact component={Asks} />
        <Route path="/produto/mais/" exact component={Asks} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

export default App