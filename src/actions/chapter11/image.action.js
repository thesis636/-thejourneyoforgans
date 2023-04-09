import {
  chapter11Image1Service,
  chapter11Image2Service,
  chapter11Image3Service,
  chapter11Image4Service,
  chapter11Image5Service,
  chapter11Image6Service,
  chapter11Image7Service,
} from "../../services/chapter11/image.service";

export const chapter11ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER11_IMAGE_LOADING", payload: true });
    const chapter11Image1 = await chapter11Image1Service();
    const chapter11Image2 = await chapter11Image2Service();
    const chapter11Image3 = await chapter11Image3Service();
    const chapter11Image4 = await chapter11Image4Service();
    const chapter11Image5 = await chapter11Image5Service();
    const chapter11Image6 = await chapter11Image6Service();
    const chapter11Image7 = await chapter11Image7Service();

    dispatch({
      type: "SET_CHAPTER11_IMAGE",
      payload: [
        chapter11Image1,
        chapter11Image2,
        chapter11Image3,
        chapter11Image4,
        chapter11Image5,
        chapter11Image6,
        chapter11Image7,
      ],
    });

    dispatch({ type: "SET_CHAPTER11_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
