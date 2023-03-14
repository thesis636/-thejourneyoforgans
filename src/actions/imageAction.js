import {
  backgroundChapter0Image1,
  backgroundChapter0Image2,
  backgroundChapter0Image3,
  backgroundChapter0Image4,
  backgroundChapter0Image5,
  backgroundChapter0Image6,
  backgroundChapter0Image7,
  backgroundChapter1Image1,
  backgroundChapter1Image2,
  backgroundChapter1Image3,
  backgroundChapter1Image4,
  backgroundChapter1Image5,
  backgroundChapter2Image1,
  backgroundChapter2Image2,
  backgroundChapter3Image1,
  backgroundChapter3Image2,
  backgroundChapter3Image3,
  backgroundChapter3Image4,
  backgroundChapter3Image5,
  backgroundChapter3Image6,
  backgroundChapter3Image7,
  backgroundChapter3Image8,
  backgroundChapter4Image1,
  backgroundChapter4Image2,
} from "../services/imageService";

export const getAllImageAction = () => async (dispatch) => {
  try {
    const resBackgroundChapter0Image1 = await backgroundChapter0Image1();
    const resBackgroundChapter0Image2 = await backgroundChapter0Image2();
    const resBackgroundChapter0Image3 = await backgroundChapter0Image3();
    const resBackgroundChapter0Image4 = await backgroundChapter0Image4();
    const resBackgroundChapter0Image5 = await backgroundChapter0Image5();
    const resBackgroundChapter0Image6 = await backgroundChapter0Image6();
    const resBackgroundChapter0Image7 = await backgroundChapter0Image7();

    const resBackgroundChapter1Image1 = await backgroundChapter1Image1();
    const resBackgroundChapter1Image2 = await backgroundChapter1Image2();
    const resBackgroundChapter1Image3 = await backgroundChapter1Image3();
    const resBackgroundChapter1Image4 = await backgroundChapter1Image4();
    const resBackgroundChapter1Image5 = await backgroundChapter1Image5();

    const resBackgroundChapter2Image1 = await backgroundChapter2Image1();
    const resBackgroundChapter2Image2 = await backgroundChapter2Image2();

    const resBackgroundChapter3Image1 = await backgroundChapter3Image1();
    const resBackgroundChapter3Image2 = await backgroundChapter3Image2();
    const resBackgroundChapter3Image3 = await backgroundChapter3Image3();
    const resBackgroundChapter3Image4 = await backgroundChapter3Image4();
    const resBackgroundChapter3Image5 = await backgroundChapter3Image5();
    const resBackgroundChapter3Image6 = await backgroundChapter3Image6();
    const resBackgroundChapter3Image7 = await backgroundChapter3Image7();
    const resBackgroundChapter3Image8 = await backgroundChapter3Image8();

    const resBackgroundChapter4Image1 = await backgroundChapter4Image1();
    const resBackgroundChapter4Image2 = await backgroundChapter4Image2();
    dispatch({
      type: "SET_IMAGE",
      payload: {
        backgroundChapter0: [
          resBackgroundChapter0Image1,
          resBackgroundChapter0Image2,
          resBackgroundChapter0Image3,
          resBackgroundChapter0Image4,
          resBackgroundChapter0Image5,
          resBackgroundChapter0Image6,
          resBackgroundChapter0Image7,
        ],
        backgroundChapter1: [
          resBackgroundChapter1Image1,
          resBackgroundChapter1Image2,
          resBackgroundChapter1Image3,
          resBackgroundChapter1Image4,
          resBackgroundChapter1Image5,
        ],
        backgroundChapter2: [
          resBackgroundChapter2Image1,
          resBackgroundChapter2Image2,
        ],
        backgroundChapter3: [
          resBackgroundChapter3Image1,
          resBackgroundChapter3Image2,
          resBackgroundChapter3Image3,
          resBackgroundChapter3Image4,
          resBackgroundChapter3Image5,
          resBackgroundChapter3Image6,
          resBackgroundChapter3Image7,
          resBackgroundChapter3Image8,
        ],
        backgroundChapter4: [
          resBackgroundChapter4Image1,
          resBackgroundChapter4Image2,
        ],
      },
    });
    dispatch({ type: "SET_IMAGE_LOADING", payload: { loading: false } });
  } catch (err) {}
};
