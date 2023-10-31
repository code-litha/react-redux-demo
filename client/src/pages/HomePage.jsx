import { useState } from "react";
import { Container } from "react-bootstrap";

function HomePage() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
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
