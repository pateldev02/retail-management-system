import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";
// import Button from "react-bootstrap/Button";

function Product({ id, title, image, price, rating, count }) {
  const [{ basket }, dispatch] = useStateValue();

  // const [{ order, user }] = useStateValue();
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   let index = order.findIndex((orderItem) => orderItem.id === id);
  //   if (index === -1) setCount(0);
  //   else setCount(order[index].count);
  // }, [order]);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        // count: count,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {/* <div className="product_count">
          <span>1 </span>
        </div> */}
        {/* <div className="product_count">
          {" "}
          <Button
            size="sm"
            onClick={addItem}
            variant="success"
            className="AddRemove"
          >
            <AddIcon />
          </Button>{" "}
          {count}{" "}
          <Button
            size="sm"
            onClick={removeItem}
            variant="danger"
            className="AddRemove"
          >
            <RemoveIcon />
          </Button> */}
        {/* </div> */}
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Bag</button>
    </div>
  );
}

export default Product;
