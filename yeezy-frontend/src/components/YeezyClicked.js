import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getShoesByID } from "../actions/yeezyActions";
import { addToCartCount } from "../actions/cartActions";
import styled from "styled-components";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const StyledDiv = styled.div`
  img {
    height: 10rem;
    width: 10rem;
  }
`;

const YeezyClicked = (props) => {
  const { id } = useParams();
  const newID = id.replace(/:/g, "");
  const {push} = useHistory()
  const {getShoesByID} = props
  useEffect(() => {
    getShoesByID(newID);
  },[getShoesByID, newID]);

  return (
    <div>
      {props.shoe.map((item, idx) => {
        return (
          <StyledDiv key={idx}>
            <h2>{item.yeezy_title}</h2>
            <span>{item.yeezy_gender}</span>
            <p>${item.yeezy_price}</p>
            <img src={item.yeezy_img[1]} alt={item.yeezy_title} />

            <button
              onClick={() => {
                props.inCart.push(item);
                props.addToCartCount();
                window.alert('Item has been added to cart')
              }}
            >
              <AddShoppingCartIcon/>
            </button>
            <button onClick={()=>{
              push("/")
            }}><ArrowBackIcon/></button>
          </StyledDiv>
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
