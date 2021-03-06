import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Favourites from './Favourites';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <main>
      <Header />
      <Switch>
        <Redirect from="/home" to="/" />
        <Route exact path="/" component={Home} />
        <Route path="/favourites" component={Favourites} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
