import React from "react";
import { DebugCart, CartProvider } from "use-shopping-cart";
const CartWrapper = ({ element }) => {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}
      successUrl={`${
        typeof window !== "undefined" && window.location.origin
      }/danke/`}
      cancelUrl={`${typeof window !== "undefined" && window.location.origin}/`}
      currency="EUR"
      allowedCountries={["DE"]}
      shippingRates={["shr_1InXfnJULUxn1qHPWWqhlVSx"]}
      billingAddressCollection={true}
    >
      {element}
    </CartProvider>
  );
};

export default CartWrapper;
