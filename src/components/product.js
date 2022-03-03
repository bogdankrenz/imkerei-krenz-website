import React, { useState } from "react"

const Product = (props) => {
return (
  <div class="column is-4">
        <div class="product-tile" style={{ backgroundColor: `${props.color}`, backgroundImage: `url(${Flower})`}}>
          <div class="is-flex is-horizontal-center mb-4">
            <figure class="image" style={{ width: '60%' }}>
              <img src={Honeyjar} />
            </figure>
          </div>
          <h2 class="title is-4 mb-2">Lavendelblüten Honig</h2>
          <p class="is-size-5 mb-4">500 g • <span class="has-text-weight-semibold">7,00 €</span></p>
          <button class="button is-info is-medium is-rounded has-text-weight-bold">
            In den Warenkorb
          </button>
        </div>
      </div>
)
}

export default Product