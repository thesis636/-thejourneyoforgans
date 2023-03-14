const initState = {
  step: '0',
};

const layoutReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_LAYOUT":
      return { ...state, step: action.payload };
    case "RESET_LAYOUT":
      return { ...state, step: '0' };
    default:
      return state;
  }
};

export default layoutReducer;
