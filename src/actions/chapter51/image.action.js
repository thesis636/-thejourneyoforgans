import {
  chapter51Image1Service,
  chapter51Image2Service,
  chapter51Image3Service,
  chapter51Image4Service,
  chapter51Image5Service,
  chapter51Image6Service,
  chapter51Image7Service,
  chapter51Image8Service,
  chapter51Image9Service,
  chapter51Image10Service,
} from "../../services/chapter51/image.service";

export const chapter51ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER51_IMAGE_LOADING", payload: true });
    const chapter51Image1 = await chapter51Image1Service();
    const chapter51Image2 = await chapter51Image2Service();
    const chapter51Image3 = await chapter51Image3Service();
    const chapter51Image4 = await chapter51Image4Service();
    const chapter51Image5 = await chapter51Image5Service();
    const chapter51Image6 = await chapter51Image6Service();
    const chapter51Image7 = await chapter51Image7Service();
    const chapter51Image8 = await chapter51Image8Service();
    const chapter51Image9 = await chapter51Image9Service();
    const chapter51Image10 = await chapter51Image10Service();

    dispatch({
      type: "SET_CHAPTER51_IMAGE",
      payload: [
        chapter51Image1,
        chapter51Image2,
        chapter51Image3,
        chapter51Image4,
        chapter51Image5,
        chapter51Image6,
        chapter51Image7,
        chapter51Image8,
        chapter51Image9,
        chapter51Image10
      ],
    });

    dispatch({ type: "SET_CHAPTER51_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
