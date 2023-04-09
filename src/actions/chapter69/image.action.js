import {
  chapter69Image1Service,
  chapter69Image2Service
} from "../../services/chapter69/image.service";

export const chapter69ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER69_IMAGE_LOADING", payload: true });
    const chapter69Image1 = await chapter69Image1Service();
    const chapter69Image2 = await chapter69Image2Service();

    dispatch({
      type: "SET_CHAPTER69_IMAGE",
      payload: [
        chapter69Image1,
        chapter69Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER69_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
