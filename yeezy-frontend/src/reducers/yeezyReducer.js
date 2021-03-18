import {
  FETCHING_SHOES_START,
  FETCHING_SHOES_SUCCESS,
  FETCHING_SHOES_FAIL,
  FETCHING_SHOE_START,
  FETCHING_SHOE_SUCCESS,
  FETCHING_SHOE_FAIL,
} from "../actions/yeezyActions";

const initialState = {
  shoes: [],
  isFetching: false,
  error: "",
  shoe: [],
  isFetchingShoe: false,
  errorShoe: "",
};

const yeezyRuducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SHOES_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCHING_SHOES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        shoes: action.payload,
      };
    case FETCHING_SHOES_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case FETCHING_SHOE_START:
      return {
        ...state,
        isFetchingShoe: true,
        errorShoe: "",
      };
    case FETCHING_SHOE_SUCCESS:
      return {
        ...state,
        isFetchingShoe: false,
        shoe: action.payload,
      };
    case FETCHING_SHOE_FAIL:
      return {
        ...state,
        errorShoe: action.payload,
      };

    default:
      return state;
  }
};

export default yeezyRuducer;
