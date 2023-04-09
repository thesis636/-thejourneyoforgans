import {
  chapter35Image1Service,
  chapter35Image2Service,
  chapter35Image3Service,
  chapter35Image4Service,
} from "../../services/chapter35/image.service";

export const chapter35ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER35_IMAGE_LOADING", payload: true });
    const chapter35Image1 = await chapter35Image1Service();
    const chapter35Image2 = await chapter35Image2Service();
    const chapter35Image3 = await chapter35Image3Service();
    const chapter35Image4 = await chapter35Image4Service();

    dispatch({
      type: "SET_CHAPTER35_IMAGE",
      payload: [
            chapter35Image1,
            chapter35Image2,
            chapter35Image3,
            chapter35Image4,
          ],
    });

    dispatch({ type: "SET_CHAPTER35_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
