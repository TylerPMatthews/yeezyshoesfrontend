import React from 'react';
import HomeIcon from "@material-ui/icons/Home";
import {Link } from "react-router-dom";
import {connect} from 'react-redux';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import styled from 'styled-components';

const StyledDiv = styled.div`
nav{
    margin:5%;
}
a{
    color:black;
    text-decoration:none;
    margin:2.5%;
}
`

const Nav = (props) => {
    return (
        <StyledDiv>
            <nav>
        <Link to="/">
          {" "}
          Home <HomeIcon />
        </Link>
        <Link to="/cart">
          {" "}
          Cart <ShoppingCartIcon /> {props.cartCount}
        </Link>
      </nav>
        </StyledDiv>
    )
}
const mapStateToProps = (state) => {
    return {
      cartCount: state.cart.cartCount,
    };
  };
  
  export default connect(mapStateToProps)(Nav);