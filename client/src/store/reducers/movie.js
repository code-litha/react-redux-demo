import { MOVIE_FETCHSUCCESS, MOVIE_LOADING } from "../actions/actionType";

const initialState = {
  movies: [],
  isLoading: false,
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_FETCHSUCCESS: // ganti data
      return {
        ...state,
        movies: action.payload,
      };
    case MOVIE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default: {
      return state;
    }
  }
}

export default movieReducer;
