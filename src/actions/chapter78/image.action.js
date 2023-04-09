import {
  chapter78Image1Service,
  chapter78Image2Service
} from "../../services/chapter78/image.service";

export const chapter78ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER78_IMAGE_LOADING", payload: true });
    const chapter78Image1 = await chapter78Image1Service();
    const chapter78Image2 = await chapter78Image2Service();

    dispatch({
      type: "SET_CHAPTER78_IMAGE",
      payload: [
        chapter78Image1,
        chapter78Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER78_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
