import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  counterDecrement,
  counterIncrement,
} from "../store/actions/actionCreator";

function HomePage() {
  const counter = useSelector((state) => {
    console.log(state, "<<< state");
    return state.counter.value;
  });
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterIncrement());
  };

  const decrement = () => {
    dispatch(counterDecrement());
  };

  return (
    <Container className="text-center">
      <h2 className="my-5">Counter : {counter}</h2>
      <button className="btn btn-danger" onClick={decrement}>
        Decrement
      </button>
      <button className="btn btn-primary mx-3" onClick={increment}>
        Increment
      </button>
    </Container>
  );
}

export default HomePage;
