import React from "react";
import { Link } from "gatsby";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

import Flower from "../../images/flower2.svg";
import Honeyjar from "../../images/honey.png";

const ProductCard = ({ sku, slug }) => {
  const { storeLastClicked, handleCartClick, addItem } = useShoppingCart();
  const price = formatCurrencyString({
    value: sku.price,
    currency: sku.currency,
    language: "de-DE",
  });
  return (
    <div class="column is-4">
      <div
        class="product-tile"
        style={{
          backgroundColor: `#${sku.color}`,
          backgroundImage: `url(${Flower})`,
        }}
      >
        <div class="is-flex is-horizontal-center mb-4">
          <figure class="image" style={{ width: "60%" }}>
            <img src={sku.image[0]} />
          </figure>
        </div>
        <h2 class="title is-4 mb-2">{sku.name}</h2>
        <p class="is-size-5 mb-4">
          500 g •&nbsp;
          <span class="has-text-weight-semibold">{price}</span>
        </p>
        <button
          class="button is-info is-medium is-rounded has-text-weight-bold"
          onClick={() => {
            addItem(sku);
            storeLastClicked("add");
            handleCartClick();
          }}
        >
          In den Warenkorb
        </button>
        <Link to={`/${slug}`}>{sku.name}</Link>
      </div>
    </div>
  );
};

export default ProductCard;
