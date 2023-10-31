import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";
import BaseLayout from "../layouts/BaseLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movies",
        element: <MoviePage />,
      },
    ],
  },
]);

export default router;
