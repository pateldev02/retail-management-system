import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  // const incrementCount = () =>{
  //   basket?.length++;
  // }

  // const decrementCount = () => {
  //   basket?.length--;
  // }
  return (
    //While styling the component, change the below mentioned classes with static data in order to save time.
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        <div className="checkoutProduct_count">
          <button type="button" class="btn btn-success">
            +
          </button>
          {getCountTotal}
          <button type="button" class="btn btn-danger">
            -
          </button>
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from bag</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
