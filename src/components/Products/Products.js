import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import ProductCard from './ProductCard'

export default (props) => (
  <StaticQuery
    query={graphql`
      query ProductPrices {
        prices: allStripePrice(
          filter: { active: { eq: true }, currency: { eq: "eur" } }
          sort: { fields: [unit_amount] }
        ) {
          edges {
            node {
              id
              active
              currency
              unit_amount
              product {
                id
                name
                images
                metadata {
                    color
                }
              }
            }
          }
        }
      }
    `}
    render={({ prices }) => (
        <div class="columns is-multiline">
        {prices.edges.map(({ node: price }) => {
          const newSku = {
            sku: price.id,
            name: price.product.name,
            price: price.unit_amount,
            currency: price.currency,
            image: price.product.images,
            color: price.product.metadata.color
          }
          return <ProductCard key={price.id} sku={newSku} />
        })}
      </div>
    )}
  />
)
