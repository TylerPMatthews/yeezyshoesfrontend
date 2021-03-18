import React from "react";
import { useHistory } from "react-router-dom";

const YeezyClicked = (props) => {
    const {push} = useHistory()
    const pushToClicked = () => {
        push(`/yeezy:${props.item.yeezy_id}`)
    }
  return (
    <div onClick={pushToClicked}>
      <h2>{props.item.yeezy_title}</h2>
      <p>${props.item.yeezy_price}</p>
    </div>
  );
};
export default YeezyClicked;
