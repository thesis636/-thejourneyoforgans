const initState = {
  status: false,
};

const startReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_START":
      return { ...state, status: action.payload };
    case "RESET_START":
      return { ...state, status: false };
    default:
      return state;
  }
};

export default startReducer;
