import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllShoes } from "../actions/yeezyActions";
import YeezyDisplay from './YeezyDisplay';

const GetAllYeezy = (props) => {
  useEffect(() => {
    props.getAllShoes();
  });

  if (props.error) {
    return <h2>We have an error</h2>;
  }

  if (props.isFetching) {
    return <h2>Fetching Yeezys</h2>;
  }


  return (
    <div>
      {props.shoes.map((item, idx) => {
      return <YeezyDisplay item={item} key={idx} />
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shoes: state.yeezy.shoes,
    isFetching: state.yeezy.isFetching,
    error: state.yeezy.error,
  };
};

export default connect(mapStateToProps, { getAllShoes })(GetAllYeezy);
