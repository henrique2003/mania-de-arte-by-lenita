import React from 'react';

//React tostify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './base.scss';

//React-router
import { Route, BrowserRouter, Switch, withRouter } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux'
import store from './redux'

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
import Auth from './components/Auth'
import DashboardIndex from './components/Dashboard/Index'
import AdminProducts from './components/Dashboard/Admin/AdminProducts'

//Users


// store.subscribe(() => {
//     console.log(store.getState());
// })

function App() {
  //WithHeader Header
  const IfHeader = withRouter(({ location }) => {
    if (location.pathname !== '/login'
    ) return <Header />
    else return false
  })

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
    <Provider store={store} >
      <BrowserRouter>
        <ScrollBar />
        <IfHeader />
        <ToastContainer autoClose={2200} />
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
          <Route path="/admin/produto/editar/:id" component={AdminProducts} />

          {/* Auth */}
          <Route path="/login" component={Auth} />

          {/* Default */}
          <Route component={Home} />
        </Switch>
        <WithFooter />
      </BrowserRouter>
    </Provider>
  );
}

export default App