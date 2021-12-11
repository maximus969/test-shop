import { Cart } from 'components/Cart';
import { Header } from 'components/Header';
import { Products } from 'components/Products';
import React from 'react';
import { Route, Switch } from 'react-router';
import { ProductsProvider } from 'context/ProductsContext';

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ProductsProvider>
        <Switch>
          <Route exact path="/" render={(props) => <Products {...props} />} />
          <Route path="/cart" render={(props) => <Cart {...props} />} />
        </Switch>
      </ProductsProvider>
    </div>
  );
};
