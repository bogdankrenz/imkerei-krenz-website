import * as React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Cart from "../components/cart"


import { loadStripe } from '@stripe/stripe-js'
import { DebugCart, CartProvider } from 'use-shopping-cart'

import Products from '../components/Products/Products'
const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const IndexPage = () => {
  return(
    <>
      <Helmet>
        <html lang="de" />
      </Helmet>
    <CartProvider
      mode="client-only"
      stripe={stripePromise}
      successUrl={`${window.location.origin}/page-2/`}
      cancelUrl={`${window.location.origin}/`}
      currency="EUR"
      allowedCountries={['DE', 'AT', 'CH']}
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
