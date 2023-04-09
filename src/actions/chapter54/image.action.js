import {
  chapter54Image1Service,
  chapter54Image2Service,
  chapter54Image3Service
} from "../../services/chapter54/image.service";

export const chapter54ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER54_IMAGE_LOADING", payload: true });
    const chapter54Image1 = await chapter54Image1Service();
    const chapter54Image2 = await chapter54Image2Service();
    const chapter54Image3 = await chapter54Image3Service();

    dispatch({
      type: "SET_CHAPTER54_IMAGE",
      payload: [
        chapter54Image1,
        chapter54Image2,
        chapter54Image3
      ],
    });

    dispatch({ type: "SET_CHAPTER54_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
