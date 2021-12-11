import { Cart } from "components/Cart"
import { Header } from "components/Header"
import { Products } from "components/Products"
import React from "react"
import { Route, Switch } from "react-router"

export const App: React.FC = () => {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/' render={() => <Products />} />
        <Route path='/cart' render={() => <Cart />} />
      </Switch>

    </div>
  )
}