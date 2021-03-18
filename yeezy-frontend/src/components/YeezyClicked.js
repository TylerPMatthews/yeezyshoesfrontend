import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getShoesByID } from "../actions/yeezyActions";
import { addToCartCount } from "../actions/cartActions";
const YeezyClicked = (props) => {
  const { id } = useParams();
  const newID = id.replace(/:/g, "");
  useEffect(() => {
    props.getShoesByID(newID);
  }, []);

  return (
    <div>
      {props.shoe.map((item, idx) => {
        return (
          <div key={idx}>
            <h2>{item.yeezy_title}</h2>
            <button
              onClick={() => {
                props.inCart.push(item);
                props.addToCartCount();
              }}
            >
              Add
            </button>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    shoe: state.yeezy.shoe,
    isFetchingShoe: state.yeezy.isFetchingShoe,
    errorShoe: state.yeezy.errorShoe,
    inCart: state.cart.inCart,
    cartCount: state.cart.cartCount,
  };
};

export default connect(mapStateToProps, { getShoesByID, addToCartCount })(
  YeezyClicked
);
