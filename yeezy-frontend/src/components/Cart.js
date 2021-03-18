import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { removeFromCartCount } from "../actions/cartActions";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

const StyledDiv = styled.div`
.mainh2 h2 {
  color: red;
}
img {
  height: 15rem;
  width: 15rem;
}

.price p {
  color: green;
  text-align: center;
  font-size: 1.5rem;
}
.description {
  margin: 5%;
}
.description p {
  letter-spacing: 1px;
}
.stock {
  margin: 5%;
  color: green;
}

.buttons {
  margin: 5%;
}
.total{
  margin:10%;

}
.total p{
  color:green;
  font-size:1.5rem;
}
.checkout{
  margin:5%;
}
.checkout button{
  font-size:1.5rem;
  border-radius:12px;

}
`;

const Cart = (props) => {
  const { push } = useHistory();
  console.log(props.inCart);
  return (
    <StyledDiv>
      <div className="mainh2">
      <h2>My Cart</h2>
      </div>
      <button
        onClick={() => {
          push("/");
        }}
      >
        <ArrowBackIcon />
      </button>
      {props.inCart.map((item, idx) => {
        return (
          <div key={idx}>
            <h2>{item.yeezy_title}</h2>
            <div className="price">
              <p>${item.yeezy_price}</p>
            </div>

            <img src={item.yeezy_img[1]} alt={item.yeezy_title} />
           
            <button
              onClick={() => {
                let index = idx;
                props.inCart.splice(index, 1);
                props.removeFromCartCount();
                push("/");
              }}
            >
              <RemoveShoppingCartIcon />
            </button>
          </div>
        );
      })}
      <div className="total">
      <p>
        {" "}
        Total: $
        {props.inCart.reduce((n, { yeezy_price }) => n + yeezy_price, 0)}
      </p>
      </div>
    
      <div className="checkout">
      <button
        onClick={() => {
          push("/checkout");
        }}
      >
        CHECKOUT
      </button>
      </div>
    
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
