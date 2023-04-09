import {
  chapter48Image1Service,
  chapter48Image2Service
} from "../../services/chapter48/image.service";

export const chapter48ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER48_IMAGE_LOADING", payload: true });
    const chapter48Image1 = await chapter48Image1Service();
    const chapter48Image2 = await chapter48Image2Service();

    dispatch({
      type: "SET_CHAPTER48_IMAGE",
      payload: [
        chapter48Image1,
        chapter48Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER48_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
