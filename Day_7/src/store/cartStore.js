import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cartItems: [],
  total: 0,
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id,
      );
      if (existingItem) {
        return {
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem,
          ),
          total: state.total + item.price * item.quantity,
        };
      }
      return {
        cartItems: [...state.cartItems, { ...item, quantity: 1 }],
        total: state.total + item.price * item.quantity,
      };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const itemToRemove = state.cartItems.find((item) => item.id === id);
      if (!itemToRemove) return state;
      return {
        cartItems: state.cartItems.filter((item) => item.id !== id),
        total: state.total - itemToRemove.price * itemToRemove.quantity,
      };
    }),
  clearCart: () =>
    set(() => ({
      cartItems: [],
      total: 0,
    })),

  increaseQuantity: (id) =>
    set((state) => {
      const item = state.cartItems.find((item) => item.id === id);
      if (!item) return state;
      return {
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
        total: state.total + item.price,
      };
    }),

  decreaseQuantity: (id) =>
    set((state) => {
      const item = state.cartItems.find((item) => item.id === id);
      if (!item) return state;
      if (item.quantity === 1) {
        return {
          cartItems: state.cartItems.filter((cartItem) => cartItem.id !== id),
          total: state.total - item.price,
        };
      }
      return {
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        ),
        total: state.total - item.price,
      };
    }),
}));
