import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { removeFromCartCount } from "../actions/cartActions";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

const StyledDiv = styled.div`
  img {
    height: 10rem;
    width: 10rem;
  }
`;

const Cart = (props) => {
  const { push } = useHistory();
  console.log(props.inCart);
  return (
    <StyledDiv>
      <h2>My Cart</h2>
      <button
        onClick={() => {
          push("/");
        }}
      >
        <ArrowBackIcon/>
      </button>
      {props.inCart.map((item, idx) => {
        return (
          <div key={idx}>
            <h2>{item.yeezy_title}</h2>
            <span>{item.yeezy_gender}</span>
            <p>${item.yeezy_price}</p>
            <img src={item.yeezy_img[1]} alt={item.yeezy_title} />
            <button
              onClick={() => {
                let index = idx;
                props.inCart.splice(index, 1);
                props.removeFromCartCount();
                push("/");
              }}
            >
              <RemoveShoppingCartIcon/>
            </button>
          </div>
        );
      })}
      <p>
        {" "}
        Total: $
        {props.inCart.reduce((n, { yeezy_price }) => n + yeezy_price, 0)}
      </p>

      <button
        onClick={() => {
          push("/checkout");
        }}
      >
        CHECKOUT
      </button>
     
    </StyledDiv>
  );
};
const mapStateToProps = (state) => {
  return {
    inCart: state.cart.inCart,
    cartCount: state.cart.cartCount,
  };
};

export default connect(mapStateToProps, { removeFromCartCount })(Cart);
