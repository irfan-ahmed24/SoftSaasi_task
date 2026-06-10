import React from "react";
import { useCartStore } from "../store/cartStore";

function Cart() {
  const CartItems = useCartStore((state) => state.cartItems);
  const total = useCartStore((state) => state.total);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  return (
    <section className="bg-white border border-[#e5e7eb] rounded-[14px] p-4">
      <div className="flex items-center justify-between mb-[0.8rem]">
        <h2 className="m-0 text-xl font-bold">Your Cart</h2>
        <button
          onClick={clearCart}
          className="border-none bg-[#dc2626] text-white px-3.5 py-[0.45rem] rounded-lg cursor-pointer hover:bg-[#b91c1c] transition-colors"
        >
          Clear Cart
        </button>
      </div>
      <ul className="m-0 p-0 list-none grid gap-[0.8rem]">
        {CartItems.map((item) => (
          <li
            key={item.id}
            className="border border-[#e5e7eb] rounded-[10px] p-3 grid grid-cols-1 sm:grid-cols-[1.4fr_auto_auto_auto] gap-[0.8rem] items-center"
          >
            <div>
              <h3 className="m-0 text-[1rem] font-semibold">{item.name}</h3>
              <p className="mt-1 mr-0 mb-0 ml-0 text-[#6b7280] text-[0.9rem]">
                ${item.price.toFixed(2)} each
              </p>
            </div>
            <div className="flex items-center gap-[0.35rem]">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="border-none bg-[#2563eb] text-white py-[0.3rem] px-2 rounded-lg cursor-pointer hover:bg-[#1d4ed8] min-w-7.5 transition-colors"
              >
                -
              </button>
              <span className="w-6.5 text-center font-medium">
                {item.quantity}
              </span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="border-none bg-[#2563eb] text-white py-[0.3rem] px-2 rounded-lg cursor-pointer hover:bg-[#1d4ed8] min-w-7.5 transition-colors"
              >
                +
              </button>
            </div>
            <span className="text-[#111827] font-bold">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="border-none bg-[#dc2626] text-white px-3.5 py-[0.45rem] rounded-lg cursor-pointer hover:bg-[#b91c1c] transition-colors"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-[0.9rem] text-right text-[1.05rem] font-bold">
        Total: $
        {CartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        ).toFixed(2)}
      </div>
    </section>
  );
}

export default Cart;
