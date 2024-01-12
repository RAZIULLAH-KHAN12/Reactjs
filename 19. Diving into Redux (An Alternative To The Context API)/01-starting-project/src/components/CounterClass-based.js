import { Component } from 'react';

import { useSelector, useDispatch, connect } from "react-redux";

import classes from "./Counter.module.css";

// const Counter = () => {
//   const dispatch = useDispatch(); //@returns — redux store's dispatch function
//   const counter = useSelector((state) => state.counter); //@returns — the selected state

//   const incrementHandler = () => {
//     dispatch({ type: "INCREMENT" });
//   };

//   const decrementHandler = () => {
//     dispatch({ type: "DECREMENT" });
//   };

//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>

//       <div>
//         <button onClick={incrementHandler}>INCREMENT</button>
//         <button onClick={decrementHandler}>DECREMENT</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends Component{
    incrementHandler() {
      this.props.increment();
    };
  
    decrementHandler() {
      this.props.decrement();
    };
    render(){
        return (
            <main className={classes.counter}>
              <h1>Redux Counter</h1>
              <div className={classes.value}>{this.props.counter}</div>
        
              <div>
                <button onClick={this.incrementHandler.bind(this)}>INCREMENT</button>
                <button onClick={this.decrementHandler.bind(this)}>DECREMENT</button>
              </div>
              <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
            </main>
          );
    }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
