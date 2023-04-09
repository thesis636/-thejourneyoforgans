import {
  chapter28Image1Service,
  chapter28Image2Service,
  chapter28Image3Service,
  chapter28Image4Service,
  chapter28Image5Service,
  chapter28Image6Service,
} from "../../services/chapter28/image.service";

export const chapter28ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER28_IMAGE_LOADING", payload: true });
    const chapter28Image1 = await chapter28Image1Service();
    const chapter28Image2 = await chapter28Image2Service();
    const chapter28Image3 = await chapter28Image3Service();
    const chapter28Image4 = await chapter28Image4Service();
    const chapter28Image5 = await chapter28Image5Service();
    const chapter28Image6 = await chapter28Image6Service();

    dispatch({
      type: "SET_CHAPTER28_IMAGE",
      payload: [
        chapter28Image1,
        chapter28Image2,
        chapter28Image3,
        chapter28Image4,
        chapter28Image5,
        chapter28Image6
      ],
    });

    dispatch({ type: "SET_CHAPTER28_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
