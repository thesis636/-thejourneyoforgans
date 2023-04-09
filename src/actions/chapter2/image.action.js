import {
  chapter2Image1Service,
  chapter2Image2Service,
  chapter2Image3Service,
  chapter2Image4Service,
  chapter2Image5Service,
  chapter2Image6Service,
  chapter2Image7Service,
} from "../../services/chapter2/image.service";

export const chapter2ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER2_IMAGE_LOADING", payload: true });
    const chapter2Image1 = await chapter2Image1Service();
    const chapter2Image2 = await chapter2Image2Service();
    const chapter2Image3 = await chapter2Image3Service();
    const chapter2Image4 = await chapter2Image4Service();
    const chapter2Image5 = await chapter2Image5Service();
    const chapter2Image6 = await chapter2Image6Service();
    const chapter2Image7 = await chapter2Image7Service();

    dispatch({
      type: "SET_CHAPTER2_IMAGE",
      payload: [
        chapter2Image1,
        chapter2Image2,
        chapter2Image3,
        chapter2Image4,
        chapter2Image5,
        chapter2Image6,
        chapter2Image7,
      ],
    });

    dispatch({ type: "SET_CHAPTER2_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
