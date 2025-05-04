import CartItem from "./components/CartItem/CartItem";
import CartCheckoutCard from "./components/CartCheckoutCard/CartCheckoutCard";

import useCart from "./hooks/useCart";

function Cart() {
  const cartItems = useCart((state) => state.cartItems);
  const total = cartItems.reduce((accumulator, item) => {
    return (accumulator += item.price || 0);
  }, 0);

  return (
    <div className="flex flex-wrap md:flex-nowrap max-w-7xl gap-5 my-5 mx-auto px-5">
      <div className="w-full md:w-[60%]">
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item}></CartItem>;
        })}
      </div>
      <CartCheckoutCard total={total} cartItems={cartItems} />
    </div>
  );
}

export default Cart;
