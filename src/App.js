import React from 'react';

import { Header } from './component';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
