import {
  chapter75Image1Service,
  chapter75Image2Service
} from "../../services/chapter75/image.service";

export const chapter75ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER75_IMAGE_LOADING", payload: true });
    const chapter75Image1 = await chapter75Image1Service();
    const chapter75Image2 = await chapter75Image2Service();

    dispatch({
      type: "SET_CHAPTER75_IMAGE",
      payload: [
        chapter75Image1,
        chapter75Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER75_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
