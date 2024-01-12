import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/counterSlice"; 
import classes from "./Counter.module.css";

const Counter = () => { 
  
  const dispatch = useDispatch(); //@returns — redux store's dispatch function
  //Used to extract data from the redux store.
  const counter = useSelector((state) => state.counter.counter); //@returns — the selected state
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: "INCREMENT" });
    dispatch(counterAction.increment());
  };

  const decrementHandler = () => {
    // dispatch({ type: "DECREMENT" });
    dispatch(counterAction.decrement());
  };

  const increaseHandler = () => { //here pass payload data
    // dispatch({ type: "INCREASE", value: 5 });
    // dispatch(counterAction.increase({value: 5})); //we can pass an object 
    dispatch(counterAction.increase(5)); //it will automatically create an action objects { type: SOME_UNIQUE_IDENTIFY, payload: 5} and also we can pass direct value
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={increaseHandler}>Increse by 5</button>
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
