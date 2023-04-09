import {
  chapter53Image1Service,
  chapter53Image2Service,
  chapter53Image3Service,
  chapter53Image4Service,
  chapter53Image5Service,
  chapter53Image6Service,
  chapter53Image7Service,
  chapter53Image8Service,
  chapter53Image9Service,
  chapter53Image10Service,
} from "../../services/chapter53/image.service";

export const chapter53ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER53_IMAGE_LOADING", payload: true });
    const chapter53Image1 = await chapter53Image1Service();
    const chapter53Image2 = await chapter53Image2Service();
    const chapter53Image3 = await chapter53Image3Service();
    const chapter53Image4 = await chapter53Image4Service();
    const chapter53Image5 = await chapter53Image5Service();
    const chapter53Image6 = await chapter53Image6Service();
    const chapter53Image7 = await chapter53Image7Service();
    const chapter53Image8 = await chapter53Image8Service();
    const chapter53Image9 = await chapter53Image9Service();
    const chapter53Image10 = await chapter53Image10Service();

    dispatch({
      type: "SET_CHAPTER53_IMAGE",
      payload: [
        chapter53Image1,
        chapter53Image2,
        chapter53Image3,
        chapter53Image4,
        chapter53Image5,
        chapter53Image6,
        chapter53Image7,
        chapter53Image8,
        chapter53Image9,
        chapter53Image10
      ],
    });

    dispatch({ type: "SET_CHAPTER53_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
