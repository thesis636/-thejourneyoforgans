import {
  chapter16Image1Service,
  chapter16Image2Service,
  chapter16Image3Service
} from "../../services/chapter16/image.service";

export const chapter16ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER16_IMAGE_LOADING", payload: true });
    const chapter16Image1 = await chapter16Image1Service();
    const chapter16Image2 = await chapter16Image2Service();
    const chapter16Image3 = await chapter16Image3Service();

    dispatch({
      type: "SET_CHAPTER16_IMAGE",
      payload: [
        chapter16Image1,
        chapter16Image2,
        chapter16Image3
      ],
    });

    dispatch({ type: "SET_CHAPTER16_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
