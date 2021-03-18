import { ADDTOCARTCOUNT, REMOVEFROMCARTCOUNT } from "../actions/cartActions";
const initialState = {
  inCart: [],
  cartCount: 0,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCARTCOUNT:
      return {
        ...state,
        cartCount: state.cartCount + 1,
      };
    case REMOVEFROMCARTCOUNT:
      return {
        ...state,
        cartCount: state.cartCount - 1,
      };
    default:
      return state;
  }
};
export default cartReducer;
