export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      const item = action.payload

      const exists = state.cartItems.find(
        (lineItem) => lineItem._id === item._id
      )
      if (exists) {
        return {
          ...state,
          cartItems: state.cartItems.map((lineItem) =>
            lineItem._id === item._id ? item : lineItem
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case 'CART_REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (lineItem) => lineItem._id !== action.payload
        ),
      }

    default:
      return {
        ...state,
      }
  }
}
