import { combineReducers } from 'redux';

import user from './user/user.reducer';
import cart from './cart/cart.reducer';

export default combineReducers({
    user,
    cart
});
