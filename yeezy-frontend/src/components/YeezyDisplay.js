import React from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const StyledDiv = styled.div`
img{
  height:10rem;
  width:10rem;
}
`

const YeezyClicked = (props) => {
    const {push} = useHistory()
    const pushToClicked = () => {
        push(`/yeezy:${props.item.yeezy_id}`)
    }
    console.log(props.item)
  return (
    <StyledDiv onClick={pushToClicked}>
      <h2>{props.item.yeezy_title}</h2>
  <span>{props.item.yeezy_gender}</span>
      <p>${props.item.yeezy_price}</p>
  <img src={props.item.yeezy_img[1]} alt={props.item.yeezy_title}/>
    </StyledDiv>
  );
};
export default YeezyClicked;
