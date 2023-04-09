import {
  chapter85Image1Service,
  chapter85Image2Service,
  chapter85Image3Service
} from "../../services/chapter85/image.service";

export const chapter85ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER85_IMAGE_LOADING", payload: true });
    const chapter85Image1 = await chapter85Image1Service();
    const chapter85Image2 = await chapter85Image2Service();
    const chapter85Image3 = await chapter85Image3Service();

    dispatch({
      type: "SET_CHAPTER85_IMAGE",
      payload: [
        chapter85Image1,
        chapter85Image2,
        chapter85Image3
      ],
    });

    dispatch({ type: "SET_CHAPTER85_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
