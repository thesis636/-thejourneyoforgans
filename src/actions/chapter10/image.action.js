import {
  chapter10Image1Service,
  chapter10Image2Service,
  chapter10Image3Service,
  chapter10Image4Service,
} from "../../services/chapter10/image.service";

export const chapter10ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER10_IMAGE_LOADING", payload: true });
    const chapter10Image1 = await chapter10Image1Service();
    const chapter10Image2 = await chapter10Image2Service();
    const chapter10Image3 = await chapter10Image3Service();
    const chapter10Image4 = await chapter10Image4Service();

    dispatch({
      type: "SET_CHAPTER10_IMAGE",
      payload: [
            chapter10Image1,
            chapter10Image2,
            chapter10Image3,
            chapter10Image4,
          ],
    });

    dispatch({ type: "SET_CHAPTER10_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
