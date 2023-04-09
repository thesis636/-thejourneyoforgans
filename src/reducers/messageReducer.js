const initState = {
  chapter: '0',
};

const messageReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return { ...state, chapter: action.payload };
    case "RESET_MESSAGE":
      return { ...state, chapter: '0' };
    default:
      return state;
  }
};

export default messageReducer;
