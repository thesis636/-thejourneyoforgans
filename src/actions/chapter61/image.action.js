import {
  chapter61Image1Service,
  chapter61Image2Service,
  chapter61Image3Service,
  chapter61Image4Service,
  chapter61Image5Service,
  chapter61Image6Service,
  chapter61Image7Service,
  chapter61Image8Service,
  chapter61Image9Service,
  chapter61Image10Service,
} from "../../services/chapter61/image.service";

export const chapter61ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER61_IMAGE_LOADING", payload: true });
    const chapter61Image1 = await chapter61Image1Service();
    const chapter61Image2 = await chapter61Image2Service();
    const chapter61Image3 = await chapter61Image3Service();
    const chapter61Image4 = await chapter61Image4Service();
    const chapter61Image5 = await chapter61Image5Service();
    const chapter61Image6 = await chapter61Image6Service();
    const chapter61Image7 = await chapter61Image7Service();
    const chapter61Image8 = await chapter61Image8Service();
    const chapter61Image9 = await chapter61Image9Service();
    const chapter61Image10 = await chapter61Image10Service();

    dispatch({
      type: "SET_CHAPTER61_IMAGE",
      payload: [
        chapter61Image1,
        chapter61Image2,
        chapter61Image3,
        chapter61Image4,
        chapter61Image5,
        chapter61Image6,
        chapter61Image7,
        chapter61Image8,
        chapter61Image9,
        chapter61Image10
      ],
    });

    dispatch({ type: "SET_CHAPTER61_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
