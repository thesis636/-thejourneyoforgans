import {
  chapter49Image1Service,
  chapter49Image2Service,
  chapter49Image3Service,
  chapter49Image4Service,
  chapter49Image5Service,
  chapter49Image6Service,
  chapter49Image7Service,
  chapter49Image8Service,
  chapter49Image9Service,
  chapter49Image10Service,
} from "../../services/chapter49/image.service";

export const chapter49ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER49_IMAGE_LOADING", payload: true });
    const chapter49Image1 = await chapter49Image1Service();
    const chapter49Image2 = await chapter49Image2Service();
    const chapter49Image3 = await chapter49Image3Service();
    const chapter49Image4 = await chapter49Image4Service();
    const chapter49Image5 = await chapter49Image5Service();
    const chapter49Image6 = await chapter49Image6Service();
    const chapter49Image7 = await chapter49Image7Service();
    const chapter49Image8 = await chapter49Image8Service();
    const chapter49Image9 = await chapter49Image9Service();
    const chapter49Image10 = await chapter49Image10Service();

    dispatch({
      type: "SET_CHAPTER49_IMAGE",
      payload: [
        chapter49Image1,
        chapter49Image2,
        chapter49Image3,
        chapter49Image4,
        chapter49Image5,
        chapter49Image6,
        chapter49Image7,
        chapter49Image8,
        chapter49Image9,
        chapter49Image10
      ],
    });

    dispatch({ type: "SET_CHAPTER49_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
