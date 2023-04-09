import {
  chapter9Image1Service,
  chapter9Image2Service,
  chapter9Image3Service,
  chapter9Image4Service,
} from "../../services/chapter9/image.service";

export const chapter9ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER9_IMAGE_LOADING", payload: true });
    const chapter9Image1 = await chapter9Image1Service();
    const chapter9Image2 = await chapter9Image2Service();
    const chapter9Image3 = await chapter9Image3Service();
    const chapter9Image4 = await chapter9Image4Service();

    dispatch({
      type: "SET_CHAPTER9_IMAGE",
      payload: [
            chapter9Image1,
            chapter9Image2,
            chapter9Image3,
            chapter9Image4,
          ],
    });

    dispatch({ type: "SET_CHAPTER9_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
