import React, { useState } from "react";

function Item({ name, category }) {
const [addToCart, setAddToCart] = useState(true)
const liClass = addToCart ? " " : "in-cart "

function handleAddToCart (e){
    setAddToCart(!addToCart)
}
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart}  className={addToCart ? "add" : "remove"}>{addToCart ? "Add to Cart": "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
