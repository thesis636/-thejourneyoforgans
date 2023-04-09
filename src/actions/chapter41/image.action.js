import {
  chapter41Image1Service,
  chapter41Image2Service,
  chapter41Image3Service,
  chapter41Image4Service,
} from "../../services/chapter41/image.service";

export const chapter41ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER41_IMAGE_LOADING", payload: true });
    const chapter41Image1 = await chapter41Image1Service();
    const chapter41Image2 = await chapter41Image2Service();
    const chapter41Image3 = await chapter41Image3Service();
    const chapter41Image4 = await chapter41Image4Service();

    dispatch({
      type: "SET_CHAPTER41_IMAGE",
      payload: [
            chapter41Image1,
            chapter41Image2,
            chapter41Image3,
            chapter41Image4,
          ],
    });

    dispatch({ type: "SET_CHAPTER41_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
