import {
  chapter33Image1Service,
  chapter33Image2Service,
  chapter33Image3Service,
  chapter33Image4Service,
  chapter33Image5Service,
  chapter33Image6Service,
} from "../../services/chapter33/image.service";

export const chapter33ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER33_IMAGE_LOADING", payload: true });
    const chapter33Image1 = await chapter33Image1Service();
    const chapter33Image2 = await chapter33Image2Service();
    const chapter33Image3 = await chapter33Image3Service();
    const chapter33Image4 = await chapter33Image4Service();
    const chapter33Image5 = await chapter33Image5Service();
    const chapter33Image6 = await chapter33Image6Service();

    dispatch({
      type: "SET_CHAPTER33_IMAGE",
      payload: [
        chapter33Image1,
        chapter33Image2,
        chapter33Image3,
        chapter33Image4,
        chapter33Image5,
        chapter33Image6
      ],
    });

    dispatch({ type: "SET_CHAPTER33_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
