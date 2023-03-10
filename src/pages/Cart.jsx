import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/cart/CartProduct";
import { getAllCartProducts, purchaseCart } from "../store/slices/cart.slice";
import "./styles/Cart.css";

const Cart = () => {
 
  const dispacth = useDispatch();

  const cart = useSelector((state) => state.cart);

  const handlePurchaseCart = () => {
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references",
    }
    dispacth(purchaseCart(data));
  }

  useEffect(() => {
    dispacth(getAllCartProducts());
  }, []);

  return (
    <main className="cart">
      <section className="cart__list">
        {cart.map((cartProduct) => (
          <CartProduct key={cartProduct.id} cartProduct={cartProduct} />
        ))}
        {!cart.length && <h2>Not Found products in cart</h2>}
        <div className="cart__btn--container">
          <button onClick={handlePurchaseCart} className="cart__btn">
            Purchase cart
          </button>
        </div>
      </section>
    </main>
  );
};

export default Cart;
