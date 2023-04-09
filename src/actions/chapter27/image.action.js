import {
  chapter27Image1Service,
  chapter27Image2Service,
  chapter27Image3Service,
  chapter27Image4Service,
  chapter27Image5Service,
  chapter27Image6Service,
} from "../../services/chapter27/image.service";

export const chapter27ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER27_IMAGE_LOADING", payload: true });
    const chapter27Image1 = await chapter27Image1Service();
    const chapter27Image2 = await chapter27Image2Service();
    const chapter27Image3 = await chapter27Image3Service();
    const chapter27Image4 = await chapter27Image4Service();
    const chapter27Image5 = await chapter27Image5Service();
    const chapter27Image6 = await chapter27Image6Service();

    dispatch({
      type: "SET_CHAPTER27_IMAGE",
      payload: [
        chapter27Image1,
        chapter27Image2,
        chapter27Image3,
        chapter27Image4,
        chapter27Image5,
        chapter27Image6
      ],
    });

    dispatch({ type: "SET_CHAPTER27_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
