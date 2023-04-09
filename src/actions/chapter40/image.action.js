import {
  chapter40Image1Service,
  chapter40Image2Service,
  chapter40Image3Service,
  chapter40Image4Service,
} from "../../services/chapter40/image.service";

export const chapter40ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER40_IMAGE_LOADING", payload: true });
    const chapter40Image1 = await chapter40Image1Service();
    const chapter40Image2 = await chapter40Image2Service();
    const chapter40Image3 = await chapter40Image3Service();
    const chapter40Image4 = await chapter40Image4Service();

    dispatch({
      type: "SET_CHAPTER40_IMAGE",
      payload: [
            chapter40Image1,
            chapter40Image2,
            chapter40Image3,
            chapter40Image4,
          ],
    });

    dispatch({ type: "SET_CHAPTER40_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
