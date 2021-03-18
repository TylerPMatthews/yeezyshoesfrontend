import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

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

  .buttons {
    margin: 5%;
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
      <div className="price">
        <p>${props.item.yeezy_price}</p>
      </div>

      <img src={props.item.yeezy_img[1]} alt={props.item.yeezy_title} />
      <div className="description">
        <p>{props.item.yeezy_description}</p>
      </div>
    </StyledDiv>
  );
};
export default YeezyClicked;
