const initState = {
  loading: false,
  backgroundChapter0: [],
  backgroundChapter1: [],
  backgroundChapter2: [],
  backgroundChapter3: [],
  backgroundChapter4: [],
  backgroundChapter5: [],
  backgroundChapter6: [],
  backgroundChapter7: [],
};

const imageReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_IMAGE":
      return {
        ...state,
        backgroundChapter0: action.payload.backgroundChapter0,
        backgroundChapter1: action.payload.backgroundChapter1,
        backgroundChapter2: action.payload.backgroundChapter2,
        backgroundChapter3: action.payload.backgroundChapter3,
        backgroundChapter4: action.payload.backgroundChapter4,
        backgroundChapter5: action.payload.backgroundChapter5,
        backgroundChapter6: action.payload.backgroundChapter6,
        backgroundChapter7: action.payload.backgroundChapter7,
      };
    case "SET_IMAGE_LOADING":
      return {
        ...state,
        loading: action.payload.loading,
      };
    case "RESET_IMAGE":
      return { ...state, number: 0 };
    default:
      return state;
  }
};

export default imageReducer;
