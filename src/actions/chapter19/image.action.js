import {
  chapter19Image1Service,
  chapter19Image2Service,
  chapter19Image3Service,
  chapter19Image4Service,
  chapter19Image5Service,
  chapter19Image6Service,
} from "../../services/chapter19/image.service";

export const chapter19ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER19_IMAGE_LOADING", payload: true });
    const chapter19Image1 = await chapter19Image1Service();
    const chapter19Image2 = await chapter19Image2Service();
    const chapter19Image3 = await chapter19Image3Service();
    const chapter19Image4 = await chapter19Image4Service();
    const chapter19Image5 = await chapter19Image5Service();
    const chapter19Image6 = await chapter19Image6Service();

    dispatch({
      type: "SET_CHAPTER19_IMAGE",
      payload: [
        chapter19Image1,
        chapter19Image2,
        chapter19Image3,
        chapter19Image4,
        chapter19Image5,
        chapter19Image6
      ],
    });

    dispatch({ type: "SET_CHAPTER19_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
