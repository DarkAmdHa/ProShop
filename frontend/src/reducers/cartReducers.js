import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const item = action.payload
      const existItem = state.cartItems.find((p) => p.product === item.product)
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }
      }
      return {
        ...state,
        cartItems: [...state.cartItems, item],
      }
    }
    case CART_REMOVE_ITEM:
      const id = action.payload

      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.product != id),
      }
    default:
      return state
  }
}
