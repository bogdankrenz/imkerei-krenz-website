import * as React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Cart from "../components/cart"

import { DebugCart, CartProvider } from 'use-shopping-cart'

import Products from '../components/Products/Products'

const IndexPage = () => {
  return(
    <>
      <Helmet>
        <html lang="de" />
      </Helmet>
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}
      successUrl={`${typeof window !== 'undefined' && window.location.origin}/danke/`}
      cancelUrl={`${typeof window !== 'undefined' && window.location.origin}/`}
      currency="EUR"
      allowedCountries={['DE']}
      shippingRates={["shr_1InXfnJULUxn1qHPWWqhlVSx"]}
      billingAddressCollection={true}
    >
    <Layout>
      <section class="section is-paddingless">
        <Products />
      </section>
        <Cart />
        {/* <DebugCart /> */}
      </Layout>
    </CartProvider>
      </>
  )
}

export default IndexPage
