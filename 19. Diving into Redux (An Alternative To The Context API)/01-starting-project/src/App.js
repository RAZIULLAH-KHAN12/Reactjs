import React, { Fragment } from "react"; 
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from './components/UserProfile';
import CounterClassBased from "./components/CounterClass-based";

function App() {
  //useSelctor take a function that always receive state as a argument
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
      {/* <CounterClassBased /> */}
    </Fragment>
  );
}

export default App;
