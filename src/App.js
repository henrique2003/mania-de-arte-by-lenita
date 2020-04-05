import React from 'react';

import './base.scss';

//React-router
import { Route, BrowserRouter, Switch, withRouter } from 'react-router-dom';

//Components Layout
//Bases
import Footer from './components/Bases/Footer'
import Header from './components/Header'
import ScrollBar from './components/Bases/ScrollBar'

import Home from './components/Home'
import Woods from './components/Woods'
import Crochet from './components/Crochet'
import Asks from './components/Asks'
import ProductPage from './components/ProductPage'

//Admin
import DashboardIndex from './components/Dashboard/Index'
import AdminProducts from './components/Dashboard/Admin/AdminProducts'

//Users

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
        {/* Web */}
        <Route path="/" exact component={Home} />
        <Route path="/madeiras" component={Woods} />
        <Route path="/croche" component={Crochet} />
        <Route path="/duvidas" component={Asks} />
        <Route path="/produtos/mais/:id" component={ProductPage} />

        {/* Admin */}
        <Route path="/admin" exact component={DashboardIndex} />
        <Route path="/admin/produtos" component={AdminProducts} />

        {/* Default */}
        <Route component={Home} />
      </Switch>
      <WithFooter />
    </BrowserRouter>
  );
}

export default App