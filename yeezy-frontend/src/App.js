import React from "react";
import "./App.css";
import { Route, Switch} from "react-router-dom";
import GetAllYeezy from "./components/GetAllYeezy";
import YeezyClicked from "./components/YeezyClicked";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/yeezy:id">
          <YeezyClicked />
        </Route>
        <Route exact path="/">
          <GetAllYeezy />
        </Route>
      </Switch>
    </div>
  );
}


export default App;
