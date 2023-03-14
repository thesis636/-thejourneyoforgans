const initState = {
  step: '0',
};

const backgroundReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_BACKGROUND":
      return { ...state, step: action.payload };
    case "RESET_BACKGROUND":
      return { ...state, step: '0' };
    default:
      return state;
  }
};

export default backgroundReducer;
