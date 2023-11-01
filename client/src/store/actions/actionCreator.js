import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  MOVIE_FETCHSUCCESS,
  MOVIE_LOADING,
} from "./actionType";

export const counterIncrement = () => {
  return {
    type: COUNTER_INCREMENT,
  };
};

export const counterDecrement = () => {
  return {
    type: COUNTER_DECREMENT,
  };
};

export const movieLoading = (payload) => {
  return {
    type: MOVIE_LOADING,
    payload,
  };
};

export const movieFetchSuccess = (payload) => {
  return {
    type: MOVIE_FETCHSUCCESS,
    payload,
  };
};
