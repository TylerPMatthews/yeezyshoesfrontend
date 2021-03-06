import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { clearCartCount, clearCartItems } from "../actions/cartActions";
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledDiv = styled.div`
p{
  font-size:1.5rem;
}
`


const Payment = (props) => {
  const { push } = useHistory();
  const getItemNames = props.inCart.map((item, idx) => {
    return item.yeezy_title;
  });

  const paymentData = {
    order_total: props.inCart.reduce(
      (n, { yeezy_price }) => n + yeezy_price,
      0
    ),
    order_item_names: getItemNames,
    user_id: "2",
  };
  const purchaseClick = (e) => {
    e.preventDefault();
    axios
      .post("https://yeezyshoesbackend.herokuapp.com/api/order", paymentData)
      .then((res) => {
        window.alert(
          "Your payment has been submited! Your Yeezy shoes are on the way!"
        );
        props.clearCartCount();
        props.clearCartItems();
        push("/");
      })
      .catch((err) => {
        console.log("Axios Payment error");
      });
  };
  console.log(paymentData);
  return (
    <StyledDiv>
      <p>
        {" "}
        Total: $
        {props.inCart.reduce((n, { yeezy_price }) => n + yeezy_price, 0)}
      </p>
      <p>
        items for purchase :{"  "}
        {props.cartCount}
      </p>
      
      <Button  variant="contained" onClick={purchaseClick}>Purchase</Button>
    </StyledDiv>
  );
};
const mapStateToProps = (state) => {
  return {
    inCart: state.cart.inCart,
    cartCount: state.cart.cartCount,
  };
};

export default connect(mapStateToProps, { clearCartCount, clearCartItems })(
  Payment
);
