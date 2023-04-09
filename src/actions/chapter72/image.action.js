import {
  chapter72Image1Service,
  chapter72Image2Service
} from "../../services/chapter72/image.service";

export const chapter72ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER72_IMAGE_LOADING", payload: true });
    const chapter72Image1 = await chapter72Image1Service();
    const chapter72Image2 = await chapter72Image2Service();

    dispatch({
      type: "SET_CHAPTER72_IMAGE",
      payload: [
        chapter72Image1,
        chapter72Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER72_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
