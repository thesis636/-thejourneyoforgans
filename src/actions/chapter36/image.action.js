import {
  chapter36Image1Service,
  chapter36Image2Service,
  chapter36Image3Service,
  chapter36Image4Service,
} from "../../services/chapter36/image.service";

export const chapter36ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER36_IMAGE_LOADING", payload: true });
    const chapter36Image1 = await chapter36Image1Service();
    const chapter36Image2 = await chapter36Image2Service();
    const chapter36Image3 = await chapter36Image3Service();
    const chapter36Image4 = await chapter36Image4Service();

    dispatch({
      type: "SET_CHAPTER36_IMAGE",
      payload: [
            chapter36Image1,
            chapter36Image2,
            chapter36Image3,
            chapter36Image4,
          ],
    });

    dispatch({ type: "SET_CHAPTER36_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
