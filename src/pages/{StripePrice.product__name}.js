import React, { useState } from "react";
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
  console.log(props);
  return (
    <Layout>
      <div style={{ backgroundColor: "#E2F0FF", marginTop: "8px" }}>
        <div className="columns" style={{ paddingTop: "115px" }}>
          <div
            className="column is-half is-flex is-horizontal-center"
            style={{
              backgroundImage: `url(${Flower})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100%",
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
            <p>7,00 €</p>
            <p>500 g</p>
            <p>Grundpreis 26,56 € / kg</p>
            <p>inkl. MwSt.</p>
            <p>Versand wird beim Checkout berechnet</p>
            <p>Lieferzeit: 2 bis 4 Werktage</p>
            <p>Anzahl:</p>
            <span>
              <button onClick={decrementCount}>-</button>
              <input
                type="number"
                min={1}
                value={count}
                onChange={handleChange}
              />
              <button onClick={incrementCount}>+</button>
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailPage;
