import { HISTORY_DATA } from "../actions/BTCActions";

const initialState = {
  historyData: [],
};

export function historyReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case HISTORY_DATA:
      return {
        ...state,
        historyData: [...state.historyData, action.payload],
      };

    default:
      return state;
  }
}
