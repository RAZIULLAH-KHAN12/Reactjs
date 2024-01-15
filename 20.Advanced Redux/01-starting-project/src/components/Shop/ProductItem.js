import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { id, title, price, description } = props;

  const addToCartHandler = () => {
    // const newTotalQuality = cart.totalQuality + 1;

    // const updatedItems = cart.items.slice(); //create copy via slice to avoid mutatiing
    // const existingItem = updatedItems.find((item) => item.id === id);
    // if (existingItem) {
    //   const updatedItem = { ...existingItem }; //new object + copy existing properties
    //   updatedItem.quatity++;
    //   updatedItem.price = updatedItem.price + price;
    //   const existingItemIndex = updatedItems.findIndex(
    //     (item) => item.id === id
    //   );
    //   updatedItems[existingItemIndex] = updatedItem;
    // } else {
    //   updatedItems.push({
    //     id: id,
    //     price: price,
    //     quantity: 1,
    //     totalPrice: price,
    //     name: title,
    //   });
    // }

    // const newCart = {
    //   totalQuantity: newTotalQuality,
    //   items: updatedItems,
    // };

    dispatch(
      cartActions.addItemToCart({
        id: id,
        title: title,
        price: price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
