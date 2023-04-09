import {
  chapter68Image1Service,
  chapter68Image2Service,
  chapter68Image3Service
} from "../../services/chapter68/image.service";

export const chapter68ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER68_IMAGE_LOADING", payload: true });
    const chapter68Image1 = await chapter68Image1Service();
    const chapter68Image2 = await chapter68Image2Service();
    const chapter68Image3 = await chapter68Image3Service();

    dispatch({
      type: "SET_CHAPTER68_IMAGE",
      payload: [
        chapter68Image1,
        chapter68Image2,
        chapter68Image3
      ],
    });

    dispatch({ type: "SET_CHAPTER68_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
