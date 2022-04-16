import React from "react";

export default function DetailPage(props) {
  // You can access the title from the url params
  // The reason why you have double underscore (product__name) is
  // because the property is nested inside the product Object

  // We use the allStripePrice query to generate all of our pages
  // For detail page we need a single query to get the info for a certain product
  console.log(props);
  return (
    <div>
      <h4>Product Detail Page!</h4>
      <h5>{props.params.product__name}</h5>
    </div>
  );
}
