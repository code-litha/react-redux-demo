import { legacy_createStore as createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counter";
import movieReducer from "./reducers/movie";

const rootReducer = combineReducers({
  counter: counterReducer,
  movie: movieReducer,
});

const store = createStore(rootReducer);

export default store;
