import "./App.css";
import Products from "./Data";
import Cart from "./components/Cart";
import { useCartStore } from "./store/cartStore";
function App() {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <main className="max-w-250 mx-auto my-0 px-4 py-8 grid grid-cols-1 gap-6 text-[#1f2937]">
      <section className="bg-white border border-[#e5e7eb] rounded-[14px] p-4">
        <h1 className="m-0 text-3xl font-bold">Shopping Cart</h1>
        <p className="mt-[0.4rem] text-[#6b7280]">
          Add products and manage your cart.
        </p>
        <ul className="m-0 p-0 list-none grid gap-[0.8rem] mt-4 grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
          {Products.map((product) => (
            <li
              key={product.id}
              className="border border-[#e5e7eb] rounded-xl p-[0.9rem]"
            >
              <h2 className="m-0 text-[1.05rem] font-semibold">
                {product.name}
              </h2>
              <p className="mt-[0.45rem] mr-0 mb-[0.8rem] ml-0 text-[#2563eb] font-bold">
                ${product.price.toFixed(2)}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="border-none bg-[#2563eb] text-white px-3.5 py-[0.45rem] rounded-lg cursor-pointer hover:bg-[#1d4ed8] transition-colors"
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </section>

      <Cart />
    </main>
  );
}

export default App;
