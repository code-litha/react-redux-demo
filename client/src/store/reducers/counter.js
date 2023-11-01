import {
  COUNTER_ADDED,
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
} from "../actions/actionType";

const initialState = {
  value: 0,
  data: [],
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case COUNTER_DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    case COUNTER_ADDED:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

export default counterReducer;
