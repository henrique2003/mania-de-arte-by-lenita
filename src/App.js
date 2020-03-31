import React from 'react';

import './base.scss';

//React-router
import { Route, BrowserRouter, Switch, withRouter } from 'react-router-dom';

//Redux
// import { Provider } from 'react-redux';

//Components Layout
import ScrollBar from './components/Bases/ScrollBar'
import Footer from './components/Bases/Footer'
import Header from './components/Header';
import Home from './components/Home';
import Woods from './components/Woods'
import Crochet from './components/Crochet'
import Asks from './components/Asks'
import ProductPage from './components/ProductPage'

function App() {
  //WithRouter Footer
  const WithFooter = withRouter(({ location }) => {
    if (location.pathname === '/' ||
      location.pathname === '/madeiras' ||
      location.pathname === '/croche' ||
      location.pathname === '/duvidas' ||
      location.pathname === '/produtos/mais/:id'
    ) return <Footer />
    else return false
  })

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
      <WithFooter />
    </BrowserRouter>
  );
}

export default App