import {
  chapter52Image1Service,
  chapter52Image2Service,
  chapter52Image3Service,
  chapter52Image4Service,
  chapter52Image5Service,
  chapter52Image6Service,
  chapter52Image7Service,
  chapter52Image8Service,
  chapter52Image9Service,
  chapter52Image10Service,
} from "../../services/chapter52/image.service";

export const chapter52ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER52_IMAGE_LOADING", payload: true });
    const chapter52Image1 = await chapter52Image1Service();
    const chapter52Image2 = await chapter52Image2Service();
    const chapter52Image3 = await chapter52Image3Service();
    const chapter52Image4 = await chapter52Image4Service();
    const chapter52Image5 = await chapter52Image5Service();
    const chapter52Image6 = await chapter52Image6Service();
    const chapter52Image7 = await chapter52Image7Service();
    const chapter52Image8 = await chapter52Image8Service();
    const chapter52Image9 = await chapter52Image9Service();
    const chapter52Image10 = await chapter52Image10Service();

    dispatch({
      type: "SET_CHAPTER52_IMAGE",
      payload: [
        chapter52Image1,
        chapter52Image2,
        chapter52Image3,
        chapter52Image4,
        chapter52Image5,
        chapter52Image6,
        chapter52Image7,
        chapter52Image8,
        chapter52Image9,
        chapter52Image10
      ],
    });

    dispatch({ type: "SET_CHAPTER52_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
