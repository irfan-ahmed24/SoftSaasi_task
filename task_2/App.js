import React from "react";

import { useState } from "react";

import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

function App() {
  const [unit_price, setUnitPrice] = useState(5000);
  const [quantity, setQuantity] = useState(0);

  const total_stock = 10;
  const remaining_stock = total_stock - quantity;

  // //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ love button functionality
  const [isLoved, setIsLoved] = useState(false);

  const handleLoveButton = () => {
    setIsLoved(!isLoved);
  };

  // //+++++++++++++++++++++++++++++++++++ increment and decrement button functionality

  const handleIncrement = () => {
    if (quantity < total_stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const [popup, setPopup] = useState(false);
  const [massage, setMassage] = useState();

  const handleAddToCart = () => {
    setPopup(true);
    if (quantity > 0) {
      setMassage("Cart Added Successfully ✓");
    } else {
      setMassage("Please select at least one item.");
    }

    setTimeout(() => {
      setPopup(false);
    }, 3000);
  };

  return (
    <>
      {popup && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-3 rounded-full shadow-2xl font-bold opacity-100 transition-opacity duration-300 pointer-events-none z-50">
          {massage}
        </div>
      )}

      <div className="h-full w-full flex justify-center items-center p-4">
        <div className="w-full max-w-sm rounded-3xl overflow-hidden bg-[#1e293b] border border-[#334155] shadow-2xl">
          <div className="bg-gradient-to-r from-teal-600 to-teal-500 p-6 flex flex-col items-center justify-center relative min-h-[160px]">
            <div className="unit_price absolute top-4 right-4 bg-[#121212]/30 px-3 py-1 rounded-full text-xs font-mono text-white">
              {unit_price}
            </div>
            <div
              onClick={handleLoveButton}
              className="absolute top-4 left-4 bg-[#121212]/30 px-3 py-1 rounded-full text-lg font-mono text-white"
            >
              {isLoved ? <FaHeart /> : <CiHeart />}
            </div>
            <h1 className="text-6xl font-light tracking-tight text-white/90">
              Product
            </h1>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-6">
              Reactive Accelerator Course
            </h2>
            <div className="bg-[#111827]/60 rounded-xl p-5 mb-6 space-y-4 border border-[#334155]/50">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Unit Price</span>
                <span className="unit_price text-xl font-mono text-teal-400">
                  {unit_price}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm border-t border-[#334155]/50 pt-4">
                <span className="text-slate-400">Total Amount</span>
                <span
                  id="total-amount"
                  className="text-xl font-mono text-teal-400"
                >
                  {unit_price * quantity}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm border-t border-[#334155]/50 pt-4">
                <span className="text-slate-400">Total Stock</span>
                <span
                  id="total-stock"
                  className="text-xl font-mono text-teal-400"
                >
                  {total_stock}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm border-t border-[#334155]/50 pt-4">
                <span className="text-slate-400">Remaining stock</span>
                <span
                  id="remaining-stock"
                  className="text-xl font-mono text-teal-400"
                >
                  {total_stock - quantity}
                </span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs text-slate-400">Quantity</label>
                <div className="flex items-center justify-between gap-4 bg-[#111827]/60 rounded-xl p-2 border border-[#334155]/50">
                  <button
                    onClick={handleDecrement}
                    className="bg-[#334155] w-10 h-10 rounded-lg flex justify-center items-center text-slate-300 hover:bg-[#475569] active:scale-95 transition-all"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 12H4"
                      ></path>
                    </svg>
                  </button>
                  <span
                    id="quantity"
                    className="text-2xl font-semibold text-white"
                  >
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="bg-[#334155] w-10 h-10 rounded-lg flex justify-center items-center text-slate-300 hover:bg-[#475569] active:scale-95 transition-all"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4v16m8-8H4"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 py-3 rounded-xl font-semibold text-white hover:from-teal-600 hover:to-cyan-600 active:scale-98 transition-all shadow-lg shadow-teal-500/20"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
