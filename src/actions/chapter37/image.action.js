import {
  chapter37Image1Service,
  chapter37Image2Service,
  chapter37Image3Service,
  chapter37Image4Service,
} from "../../services/chapter37/image.service";

export const chapter37ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER37_IMAGE_LOADING", payload: true });
    const chapter37Image1 = await chapter37Image1Service();
    const chapter37Image2 = await chapter37Image2Service();
    const chapter37Image3 = await chapter37Image3Service();
    const chapter37Image4 = await chapter37Image4Service();

    dispatch({
      type: "SET_CHAPTER37_IMAGE",
      payload: [
            chapter37Image1,
            chapter37Image2,
            chapter37Image3,
            chapter37Image4,
          ],
    });

    dispatch({ type: "SET_CHAPTER37_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
