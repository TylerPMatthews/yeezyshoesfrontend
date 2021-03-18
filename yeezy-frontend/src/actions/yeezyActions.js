import axios from "axios";
export const FETCHING_SHOES_START = "FETCHING_SHOES_START";
export const FETCHING_SHOES_SUCCESS = "FETCHING_SHOES_SUCCESS";
export const FETCHING_SHOES_FAIL = "FETCHING_SHOES_FAIL";
export const FETCHING_SHOE_START = "FETCHING_SHOE_START";
export const FETCHING_SHOE_SUCCESS = "FETCHING_SHOE_SUCCESS";
export const FETCHING_SHOE_FAIL = "FETCHING_SHOE_FAIL";
export const getAllShoes = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING_SHOES_START });

    axios
      .get("https://yeezyshoesbackend.herokuapp.com/api/yeezys")
      .then((res) => {
        dispatch({ type: FETCHING_SHOES_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCHING_SHOES_FAIL, payload: err.response });
      });
  };
};

export const getShoesByID = (id) => {
  return (dispatch) => {
    dispatch({ type: FETCHING_SHOE_START });

    axios
      .get(`https://yeezyshoesbackend.herokuapp.com/api/yeezys/${id}`)
      .then((res) => {
        dispatch({ type: FETCHING_SHOE_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCHING_SHOE_FAIL, payload: err.response });
      });
  };
};
