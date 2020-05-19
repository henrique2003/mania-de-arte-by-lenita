import React from 'react'

import './base.scss';

//React confirm alert
import 'react-confirm-alert/src/react-confirm-alert.css'

//React tostify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


//React-router
import { Route, BrowserRouter, Switch, withRouter } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux'
import store from './redux'

//Components Layout
//Bases
import {
  //Bases
  Footer,
  Header,
  ScrollBar,
  //Pages all users
  Home,
  Woods,
  Crochet,
  Asks,
  ProductPage,
  //Admin
  Auth,
  DashboardIndex,
  Admins,
  ProductAdmin,
  SetAccess,
  CreateAdmin,
  Requests,
  AdminCreateProduct
} from './components'

// store.subscribe(() => {
//   console.log(store.getState())
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
      location.pathname === '/crochet' ||
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
          <Route path="/crochet" component={Crochet} />
          <Route path="/duvidas" component={Asks} />
          <Route path="/produtos/mais/:id" component={ProductPage} />

          {/* Admin */}
          <Route path="/admin" exact component={DashboardIndex} />
          <Route path="/admin/admins" exact component={Admins} />
          <Route path="/admin/admins/:id" component={SetAccess} />
          <Route path="/admin/criar/admins" component={CreateAdmin} />
          <Route path="/admin/pedidos" component={Requests} />
          <Route path="/admin/produtos" component={ProductAdmin} />
          <Route path="/admin/criar/produto" component={AdminCreateProduct} />
          <Route path="/admin/criar/produto/imagem" component={AdminCreateProduct} />

          {/* Auth */}
          <Route path="/login" component={Auth} />

          {/* Default */}
          <Route component={Home} />
        </Switch>
        <WithFooter />
      </BrowserRouter>
    </Provider>
  )
}

export default App