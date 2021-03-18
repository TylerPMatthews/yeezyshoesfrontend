import React from "react";
import { connect } from "react-redux";


const Payment = (props) => {
  return (
    <div>
      <p>
        {" "}
        Total: $
        {props.inCart.reduce((n, { yeezy_price }) => n + yeezy_price, 0)}
      </p>
      <p>
        items for purchase :{"  "}
        {props.cartCount}
      </p>
  <a target='_blank' href='http://www.paypal.com' rel="noreferrer">Purchase</a>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    inCart: state.cart.inCart,
    cartCount: state.cart.cartCount,
  };
};

export default connect(mapStateToProps)(Payment);
