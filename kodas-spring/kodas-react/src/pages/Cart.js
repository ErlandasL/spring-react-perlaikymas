import React from "react";
import Title from "../components/Title";
import CartColumns from "../components/Cart/CartColumns";
import EmptyCart from "../components/Cart/EmptyCart";

const Cart = () => {
  return (
    <section>
      <Title name="your" title="cart" />
      <CartColumns />
      <EmptyCart />
    </section>
  );
};

export default Cart;
