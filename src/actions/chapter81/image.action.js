import {
  chapter81Image1Service,
  chapter81Image2Service,
  chapter81Image3Service,
  chapter81Image4Service,
  chapter81Image5Service,
  chapter81Image6Service,
  chapter81Image7Service,
  chapter81Image8Service,
  chapter81Image9Service,
  chapter81Image10Service,
  chapter81Image11Service,
  chapter81Image12Service,
  chapter81Image13Service,
} from "../../services/chapter81/image.service";

export const chapter81ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER81_IMAGE_LOADING", payload: true });
    const chapter81Image1 = await chapter81Image1Service();
    const chapter81Image2 = await chapter81Image2Service();
    const chapter81Image3 = await chapter81Image3Service();
    const chapter81Image4 = await chapter81Image4Service();
    const chapter81Image5 = await chapter81Image5Service();
    const chapter81Image6 = await chapter81Image6Service();
    const chapter81Image7 = await chapter81Image7Service();
    const chapter81Image8 = await chapter81Image8Service();
    const chapter81Image9 = await chapter81Image9Service();
    const chapter81Image10 = await chapter81Image10Service();
    const chapter81Image11 = await chapter81Image11Service();
    const chapter81Image12 = await chapter81Image12Service();
    const chapter81Image13 = await chapter81Image13Service();
    dispatch({
      type: "SET_CHAPTER81_IMAGE",
      payload: [
        chapter81Image1,
        chapter81Image2,
        chapter81Image3,
        chapter81Image4,
        chapter81Image5,
        chapter81Image6,
        chapter81Image7,
        chapter81Image8,
        chapter81Image9,
        chapter81Image10,
        chapter81Image11,
        chapter81Image12,
        chapter81Image13
      ],
    });

    dispatch({ type: "SET_CHAPTER81_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
