import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  setName,
} from "./store/slice/counterSlice";
import { fetchUser } from "./store/slice/userSlice";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const { value, name } = counter;
  const dispatch = useDispatch();
  console.log(value);
  console.log(name);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <>
      <h1>
        Counter : {value} : {name}
      </h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(setName("Rahul"))}>SetName</button>
    </>
  );
};

export default App;
