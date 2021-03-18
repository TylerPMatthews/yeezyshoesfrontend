import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getShoesByID } from "../actions/yeezyActions";
import { addToCartCount } from "../actions/cartActions";
import styled from "styled-components";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const StyledDiv = styled.div`
  h2 {
    color: red;
    background-color: black;
    padding: 5%;
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

  .buttons{
    margin:5%;
  }
`;

const YeezyClicked = (props) => {
  const { id } = useParams();
  const newID = id.replace(/:/g, "");
  const { push } = useHistory();
  const { getShoesByID } = props;
  useEffect(() => {
    getShoesByID(newID);
  }, [getShoesByID, newID]);

  return (
    <div>
      {props.shoe.map((item, idx) => {
        return (
          <StyledDiv key={idx}>
            <h2>{item.yeezy_title}</h2>
            <div className="price">
              <p>${item.yeezy_price}</p>
            </div>

            <img src={item.yeezy_img[1]} alt={item.yeezy_title} />
            <div className="description">
              <p>{item.yeezy_description}</p>
            </div>
            <div className="stock">
              <span>In Stock: {item.count}</span>
            </div>
            <div className="buttons">
              <button
                onClick={() => {
                  props.inCart.push(item);
                  props.addToCartCount();
                  window.alert("Item has been added to cart");
                }}
              >
                <AddShoppingCartIcon />
              </button>

              <button
                onClick={() => {
                  push("/");
                }}
              >
                <ArrowBackIcon />
              </button>
            </div>
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
