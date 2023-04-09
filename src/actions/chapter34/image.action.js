import {
  chapter34Image1Service,
  chapter34Image2Service,
  chapter34Image3Service,
  chapter34Image4Service,
} from "../../services/chapter34/image.service";

export const chapter34ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER34_IMAGE_LOADING", payload: true });
    const chapter34Image1 = await chapter34Image1Service();
    const chapter34Image2 = await chapter34Image2Service();
    const chapter34Image3 = await chapter34Image3Service();
    const chapter34Image4 = await chapter34Image4Service();

    dispatch({
      type: "SET_CHAPTER34_IMAGE",
      payload: [
            chapter34Image1,
            chapter34Image2,
            chapter34Image3,
            chapter34Image4,
          ],
    });

    dispatch({ type: "SET_CHAPTER34_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
