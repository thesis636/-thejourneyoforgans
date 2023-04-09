import {
  chapter82Image1Service,
  chapter82Image2Service,
  chapter82Image3Service,
  chapter82Image4Service,
  chapter82Image5Service,
  chapter82Image6Service,
} from "../../services/chapter82/image.service";

export const chapter82ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER82_IMAGE_LOADING", payload: true });
    const chapter82Image1 = await chapter82Image1Service();
    const chapter82Image2 = await chapter82Image2Service();
    const chapter82Image3 = await chapter82Image3Service();
    const chapter82Image4 = await chapter82Image4Service();
    const chapter82Image5 = await chapter82Image5Service();
    const chapter82Image6 = await chapter82Image6Service();

    dispatch({
      type: "SET_CHAPTER82_IMAGE",
      payload: [
        chapter82Image1,
        chapter82Image2,
        chapter82Image3,
        chapter82Image4,
        chapter82Image5,
        chapter82Image6
      ],
    });

    dispatch({ type: "SET_CHAPTER82_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
