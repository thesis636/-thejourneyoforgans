import {
  chapter42Image1Service,
  chapter42Image2Service,
  chapter42Image3Service
} from "../../services/chapter42/image.service";

export const chapter42ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER42_IMAGE_LOADING", payload: true });
    const chapter42Image1 = await chapter42Image1Service();
    const chapter42Image2 = await chapter42Image2Service();
    const chapter42Image3 = await chapter42Image3Service();

    dispatch({
      type: "SET_CHAPTER42_IMAGE",
      payload: [
        chapter42Image1,
        chapter42Image2,
        chapter42Image3
      ],
    });

    dispatch({ type: "SET_CHAPTER42_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
