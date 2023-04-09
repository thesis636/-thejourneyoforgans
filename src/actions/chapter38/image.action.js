import {
  chapter38Image1Service,
  chapter38Image2Service,
  chapter38Image3Service,
  chapter38Image4Service,
} from "../../services/chapter38/image.service";

export const chapter38ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER38_IMAGE_LOADING", payload: true });
    const chapter38Image1 = await chapter38Image1Service();
    const chapter38Image2 = await chapter38Image2Service();
    const chapter38Image3 = await chapter38Image3Service();
    const chapter38Image4 = await chapter38Image4Service();

    dispatch({
      type: "SET_CHAPTER38_IMAGE",
      payload: [
            chapter38Image1,
            chapter38Image2,
            chapter38Image3,
            chapter38Image4,
          ],
    });

    dispatch({ type: "SET_CHAPTER38_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
