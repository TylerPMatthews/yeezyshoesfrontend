import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  img {
    height: 10rem;
    width: 10rem;
  }
`;

const YeezyClicked = (props) => {
  const { push } = useHistory();
  const pushToClicked = () => {
    push(`/yeezy:${props.item.yeezy_id}`);
  };
  console.log(props.item);
  return (
    <StyledDiv onClick={pushToClicked}>
      <h2>{props.item.yeezy_title}</h2>
      <div>
      <span>{props.item.yeezy_gender}</span>
      </div>
      
      <img src={props.item.yeezy_img[1]} alt={props.item.yeezy_title} />
      <div>
      <p>{props.item.yeezy_description}</p>
      </div>
   
      <p>${props.item.yeezy_price}</p>
      <span> Stock: {props.item.count}</span>
    </StyledDiv>
  );
};
export default YeezyClicked;
