const initialState = {
  val: 0,
  val2: 0
};

export function changeCounter(state = initialState, action) {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return {
        ...state,
        val: state.val + 1
      };
    case "DECREASE_COUNTER":
      return {
        ...state,
        val: state.val - 1
      };
    case "DECREASE_COUNTER_2": {
      return {
        ...state,
        val2: state.val2 - 2
      };
    }
    default:
      return state;
  }
}
