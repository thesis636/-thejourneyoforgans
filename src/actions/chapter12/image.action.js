import {
  chapter12Image1Service,
  chapter12Image2Service,
  chapter12Image3Service,
  chapter12Image4Service,
  chapter12Image5Service,
  chapter12Image6Service,
} from "../../services/chapter12/image.service";

export const chapter12ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER12_IMAGE_LOADING", payload: true });
    const chapter12Image1 = await chapter12Image1Service();
    const chapter12Image2 = await chapter12Image2Service();
    const chapter12Image3 = await chapter12Image3Service();
    const chapter12Image4 = await chapter12Image4Service();
    const chapter12Image5 = await chapter12Image5Service();
    const chapter12Image6 = await chapter12Image6Service();

    dispatch({
      type: "SET_CHAPTER12_IMAGE",
      payload: [
        chapter12Image1,
        chapter12Image2,
        chapter12Image3,
        chapter12Image4,
        chapter12Image5,
        chapter12Image6
      ],
    });

    dispatch({ type: "SET_CHAPTER12_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
