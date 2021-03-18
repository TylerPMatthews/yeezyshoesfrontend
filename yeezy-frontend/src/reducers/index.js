import {combineReducers} from 'redux';
import yeezyReducer from './yeezyReducer';
import cartReducer from './cartReducer';

 const rootReducer = combineReducers({
    yeezy: yeezyReducer,
    cart: cartReducer,
})
export default rootReducer;