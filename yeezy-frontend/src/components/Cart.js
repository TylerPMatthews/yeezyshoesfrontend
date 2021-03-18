import React from "react";
import { connect } from "react-redux";
const Cart = (props) => {
  return (
    <div>
      {props.inCart.map((item, idx) => {
        return (
          <div key={idx}>
            <h2>{item.yeezy_title}</h2>
          </div>
        );
      })}
      <p>
        {" "}
        Total: $
        {props.inCart.reduce((n, { yeezy_price }) => n + yeezy_price, 0)}
      </p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    inCart: state.cart.inCart,
    cartCount: state.cart.cartCount,
  };
};

export default connect(mapStateToProps)(Cart);
