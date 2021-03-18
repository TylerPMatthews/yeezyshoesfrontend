import React from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import GetAllYeezy from "./components/GetAllYeezy";
import YeezyClicked from "./components/YeezyClicked";
import Cart from "./components/Cart";
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import { connect } from "react-redux";
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



function App(props) {
  return (
    <div className="App">
      <nav>
        <Link to="/"><HomeIcon /></Link>
        <Link to="/cart"> <ShoppingCartIcon/> {props.cartCount}</Link>
      </nav>
      <Switch>
        <Route path="/payment">
          <Payment/>
        </Route>
        <Route path="/checkout">
          <Checkout/>
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

const mapStateToProps = (state) => {
  return {
    cartCount: state.cart.cartCount,
  };
};

export default connect(mapStateToProps)(App);
