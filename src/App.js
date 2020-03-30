import React from 'react';

import './base.scss';

//React-router
import { Route, BrowserRouter, Switch } from 'react-router-dom';

//Redux
// import { Provider } from 'react-redux';

//Components Layout
import ScrollBar from './components/Bases/ScrollBar'
import Header from './components/Header';
import Home from './components/Home';
import Woods from './components/Woods'
import Crochet from './components/Crochet'
import Asks from './components/Asks'
import ProductPage from './components/ProductPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollBar />
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/madeiras" exact component={Woods} />
        <Route path="/croche" exact component={Crochet} />
        <Route path="/duvidas" exact component={Asks} />
        <Route path="/produtos/mais/:id" exact component={ProductPage} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App