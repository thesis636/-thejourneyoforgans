import {
  chapter58Image1Service,
  chapter58Image2Service
} from "../../services/chapter58/image.service";

export const chapter58ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER58_IMAGE_LOADING", payload: true });
    const chapter58Image1 = await chapter58Image1Service();
    const chapter58Image2 = await chapter58Image2Service();

    dispatch({
      type: "SET_CHAPTER58_IMAGE",
      payload: [
        chapter58Image1,
        chapter58Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER58_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
