import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/reducers/counterSlice";

export default () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="mb-3">React Js Redux Store with Slice State Examle</h2>
      <p className="h1">{count}</p>
      <button
        onClick={() => {
          dispatch(increment(2));
        }}
        className="me-2 btn btn-primary"
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        className="me-2 btn btn-danger"
      >
        Decrement
      </button>
    </>
  );
};
