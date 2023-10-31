import { Container, Table } from "react-bootstrap";
import { API_URL } from "../config/api";
import { useEffect, useState } from "react";
import MovieRow from "../components/MovieRow";

function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/movies`);
      const responseJSON = await response.json();
      setMovies(responseJSON);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h1 className="text-center my-5">Movie Page</h1>
      <Table striped borderless hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td colSpan={4} className="text-center">
                Loading...
              </td>
            </tr>
          )}
          {!isLoading &&
            movies.map((movie, index) => (
              <MovieRow movie={movie} key={movie?.id} index={index} />
            ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default MoviePage;
