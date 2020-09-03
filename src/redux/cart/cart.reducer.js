const { TOGGLE_CART_HIDDEN } = require("./cart.types");

const initialState = {
  hidden: true,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default cartReducer;