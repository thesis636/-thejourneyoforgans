import {
  chapter80Image1Service,
  chapter80Image2Service,
  chapter80Image3Service,
  chapter80Image4Service,
  chapter80Image5Service,
  chapter80Image6Service,
  chapter80Image7Service,
  chapter80Image8Service,
  chapter80Image9Service,
  chapter80Image10Service,
  chapter80Image11Service,
  chapter80Image12Service,
  chapter80Image13Service,
} from "../../services/chapter80/image.service";

export const chapter80ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER80_IMAGE_LOADING", payload: true });
    const chapter80Image1 = await chapter80Image1Service();
    const chapter80Image2 = await chapter80Image2Service();
    const chapter80Image3 = await chapter80Image3Service();
    const chapter80Image4 = await chapter80Image4Service();
    const chapter80Image5 = await chapter80Image5Service();
    const chapter80Image6 = await chapter80Image6Service();
    const chapter80Image7 = await chapter80Image7Service();
    const chapter80Image8 = await chapter80Image8Service();
    const chapter80Image9 = await chapter80Image9Service();
    const chapter80Image10 = await chapter80Image10Service();
    const chapter80Image11 = await chapter80Image11Service();
    const chapter80Image12 = await chapter80Image12Service();
    const chapter80Image13 = await chapter80Image13Service();
    dispatch({
      type: "SET_CHAPTER80_IMAGE",
      payload: [
        chapter80Image1,
        chapter80Image2,
        chapter80Image3,
        chapter80Image4,
        chapter80Image5,
        chapter80Image6,
        chapter80Image7,
        chapter80Image8,
        chapter80Image9,
        chapter80Image10,
        chapter80Image11,
        chapter80Image12,
        chapter80Image13
      ],
    });

    dispatch({ type: "SET_CHAPTER80_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
