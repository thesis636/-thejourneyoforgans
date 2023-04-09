const initState = {
  chapter: '0',
};

const backgroundReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_BACKGROUND":
      return { ...state, chapter: action.payload };
    case "RESET_BACKGROUND":
      return { ...state, chapter: '0' };
    default:
      return state;
  }
};

export default backgroundReducer;
