import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import Bill from "./Bill";
import { clearCart } from "../utils/cartSlice";
import CartItem from "./cards/CartItem";

export default function Cart() {
  // Subscribing to the cart
  const cart = useSelector((store) => store.cart.cartItems);
  const cartItems = Object.values(cart);

  // console.log(cartItems);

  // dispatching an action which will call the reducer
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      {cartItems.length ? (
        <div className="w-[70%] mx-auto m-2">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-[40px] font-bold">Cart</h1>
            <button
              onClick={handleClearCart}
              className="bg-[orange] text-white font-bold py-2 px-4 rounded-lg cursor-pointer hover:bg-[green]"
            >
              Clear Cart
            </button>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center gap-[20px]">
            {/* Items Card */}
            <div className="w-full">
              <div className="bg-white rounded-md">
                {cartItems.map((item) => (
                  <CartItem key={item?.item?.id} details={item} />
                ))}
              </div>
            </div>
            {/* Bill Card */}
            <div className="bg-white w-full rounded-md">
              <Bill cartItems={cartItems} />
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}
