import {
  chapter62Image1Service,
  chapter62Image2Service,
  chapter62Image3Service,
  chapter62Image4Service,
  chapter62Image5Service,
  chapter62Image6Service,
  chapter62Image7Service,
  chapter62Image8Service,
  chapter62Image9Service,
  chapter62Image10Service,
} from "../../services/chapter62/image.service";

export const chapter62ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER62_IMAGE_LOADING", payload: true });
    const chapter62Image1 = await chapter62Image1Service();
    const chapter62Image2 = await chapter62Image2Service();
    const chapter62Image3 = await chapter62Image3Service();
    const chapter62Image4 = await chapter62Image4Service();
    const chapter62Image5 = await chapter62Image5Service();
    const chapter62Image6 = await chapter62Image6Service();
    const chapter62Image7 = await chapter62Image7Service();
    const chapter62Image8 = await chapter62Image8Service();
    const chapter62Image9 = await chapter62Image9Service();
    const chapter62Image10 = await chapter62Image10Service();

    dispatch({
      type: "SET_CHAPTER62_IMAGE",
      payload: [
        chapter62Image1,
        chapter62Image2,
        chapter62Image3,
        chapter62Image4,
        chapter62Image5,
        chapter62Image6,
        chapter62Image7,
        chapter62Image8,
        chapter62Image9,
        chapter62Image10
      ],
    });

    dispatch({ type: "SET_CHAPTER62_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
