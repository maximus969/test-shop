import { Cart } from 'components/Cart';
import { Header } from 'components/Header/Header';
import { Products } from 'components/Products';
import React from 'react';
import { Route, Switch } from 'react-router';
import { ProductsProvider } from 'context/ProductsContext';
import s from './App.module.css'

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main className={s.main}>
        <ProductsProvider>
          <Switch>
            <Route exact path="/" render={(props) => <Products {...props} />} />
            <Route path="/cart" render={(props) => <Cart {...props} />} />
          </Switch>
        </ProductsProvider>
      </main>
    </div>
  );
};
