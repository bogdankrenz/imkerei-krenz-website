import React, { useState } from "react";
import Helmet from "react-helmet";
import Cart from "../components/cart";

import Layout from "../components/layout";
import Flower from "../images/flower3.svg";
import Pic from "../images/honey.png";

const DetailPage = (props) => {
  const [count, setCount] = useState(1);
  console.log(count);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    return count <= 1 ? count : setCount(count - 1);
  };

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  // You can access the title from the url params
  // The reason why you have double underscore (product__name) is
  // because the property is nested inside the product Object

  // We use the allStripePrice query to generate all of our pages
  // For detail page we need a single query to get the info for a certain product

  // TODO: Create single query for detail pase
  return (
    <>
      <Helmet>
        <html lang="de" />
      </Helmet>
      <Layout>
        {/* TODO: move styles into dedicated folder/file  */}
        <div style={{ backgroundColor: "#E2F0FF", marginTop: "8px" }}>
          <div className="columns" style={{ paddingTop: "115px" }}>
            <div
              className="column is-half is-flex is-horizontal-center"
              style={{
                backgroundImage: `url(${Flower})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100%",
                maxHeight: "416px",
              }}
            >
              <img src={Pic} style={{ width: "60%" }} alt="honey" />
            </div>
            <div className="column">
              <p
                style={{
                  fontFamily: "Lota Grotesque Alt 2",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "40px",
                  lineHeight: "44px",
                  marginTop: "43px",
                }}
              >
                Lavendelblüten Honig
              </p>
              <p
                style={{
                  fontFamily: "Lota Grotesque Alt 2",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "32px",
                  lineHeight: "36px",
                  marginTop: "16px",
                }}
              >
                7,00 €
              </p>
              <p
                style={{
                  fontFamily: "Lota Grotesque Alt 2",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "20px",
                  lineHeight: "22px",
                  marginTop: "16px",
                }}
              >
                500 g
              </p>
              <p
                style={{
                  fontFamily: "Lota Grotesque Alt 2",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  marginTop: "8px",
                }}
              >
                Grundpreis 26,56 € / kg
              </p>
              <p
                style={{
                  fontFamily: "Lota Grotesque Alt 2",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  marginTop: "8px",
                }}
              >
                inkl. MwSt. <br />
                Versand wird beim Checkout berechnet <br />
                Lieferzeit: 2 bis 4 Werktage
              </p>
              <p
                style={{
                  fontFamily: "Lota Grotesque Alt 2",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  marginTop: "16px",
                }}
              >
                Anzahl:
              </p>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  // justifyContent: "center",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <a
                  role={"button"}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#3C64D2",
                    borderRadius: "8px",
                    width: "48px",
                    height: "48px",
                    color: "white",
                    fontFamily: "Lota Grotesque Alt 2",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "22px",
                    marginRight: "8px",
                  }}
                  onClick={decrementCount}
                  value={"-"}
                >
                  -
                </a>
                <input
                  style={{
                    fontFamily: "Lota Grotesque Alt 2",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "22px",
                    textAlign: "center",
                    padding: "10px 10px",
                    marginRight: "8px",

                    width: "48px",
                    height: "48px",
                    /* White */

                    background: "#FFFFFF",
                    /* Grey */

                    border: "1px solid #DBDBDB",
                    borderRadius: "8px",
                  }}
                  type="number"
                  min={1}
                  value={count}
                  onChange={handleChange}
                />
                <a
                  role={"button"}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#3C64D2",
                    borderRadius: "8px",
                    width: "48px",
                    height: "48px",
                    color: "white",
                    fontFamily: "Lota Grotesque Alt 2",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "22px",
                  }}
                  onClick={incrementCount}
                >
                  +
                </a>
              </span>
              <button
                class="button is-info is-medium is-rounded has-text-weight-bold"
                style={{ marginTop: "24px" }}
                // TODO: onClick will work when we retrieve the information for one product with a query
                // onClick={() => {
                //   addItem(sku);
                //   storeLastClicked("add");
                //   handleCartClick();
                // }}
              >
                In den Warenkorb legen
              </button>
              <p style={{ marginTop: "48px" }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum. At vero eos et accusam et justo duo dolores
                et ea rebum.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DetailPage;
