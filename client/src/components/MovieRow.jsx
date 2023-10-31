import { Button } from "react-bootstrap";

function MovieRow({ movie, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{movie?.title}</td>
      <td>{movie?.year}</td>
      <td>
        <Button variant="light">Delete</Button>
      </td>
    </tr>
  );
}

export default MovieRow;
