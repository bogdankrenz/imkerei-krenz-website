import * as React from "react";
import { DebugCart, CartProvider } from "use-shopping-cart";
import Helmet from "react-helmet";

import Cart from "../components/cart";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Products from "../components/Products/Products";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <html lang="de" />
      </Helmet>

      <Layout>
        <section class="section is-paddingless">
          <Products />
        </section>
        <Cart />
        {/* <DebugCart /> */}
      </Layout>
      <Footer />
    </>
  );
};

export default IndexPage;
