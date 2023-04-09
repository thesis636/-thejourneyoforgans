import {
  chapter14Image1Service,
  chapter14Image2Service
} from "../../services/chapter14/image.service";

export const chapter14ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER14_IMAGE_LOADING", payload: true });
    const chapter14Image1 = await chapter14Image1Service();
    const chapter14Image2 = await chapter14Image2Service();

    dispatch({
      type: "SET_CHAPTER14_IMAGE",
      payload: [
        chapter14Image1,
        chapter14Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER14_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
