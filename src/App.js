import React from 'react';
import { Header, PizzaBlock } from './component';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" exact>
          <Home items={pizzas} />
        </Route>
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
