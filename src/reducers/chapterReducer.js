const initState = {
  number: 0,
};

const chapterReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_CHAPTER":
      return { ...state, number: action.payload };
    case "RESET_CHAPTER":
      return { ...state, number: 0 };
    default:
      return state;
  }
};

export default chapterReducer;
