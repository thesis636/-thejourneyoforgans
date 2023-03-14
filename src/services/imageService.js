//Import Background Chapter 0
import background_chapter0_img1 from "../images/backgrounds/chapter-0/1.PNG";
import background_chapter0_img2 from "../images/backgrounds/chapter-0/2.PNG";
import background_chapter0_img3 from "../images/backgrounds/chapter-0/3.PNG";
import background_chapter0_img4 from "../images/backgrounds/chapter-0/4.PNG";
import background_chapter0_img5 from "../images/backgrounds/chapter-0/5.PNG";
import background_chapter0_img6 from "../images/backgrounds/chapter-0/6.PNG";
import background_chapter0_img7 from "../images/backgrounds/chapter-0/7.PNG";
//Import Background Chapter 1
import background_chapter1_img1 from "../images/backgrounds/chapter-1/1.PNG";
import background_chapter1_img2 from "../images/backgrounds/chapter-1/2.PNG";
import background_chapter1_img3 from "../images/backgrounds/chapter-1/3.PNG";
import background_chapter1_img4 from "../images/backgrounds/chapter-1/4.PNG";
import background_chapter1_img5 from "../images/backgrounds/chapter-1/5.PNG";
//Import Background Chapter 2
import background_chapter2_img1 from "../images/backgrounds/chapter-2/1.PNG";
import background_chapter2_img2 from "../images/backgrounds/chapter-2/2.PNG";
//Import Background Chapter 3
import background_chapter3_img1 from "../images/backgrounds/chapter-3/1.PNG";
import background_chapter3_img2 from "../images/backgrounds/chapter-3/2.PNG";
import background_chapter3_img3 from "../images/backgrounds/chapter-3/3.PNG";
import background_chapter3_img4 from "../images/backgrounds/chapter-3/4.PNG";
import background_chapter3_img5 from "../images/backgrounds/chapter-3/5.PNG";
import background_chapter3_img6 from "../images/backgrounds/chapter-3/6.PNG";
import background_chapter3_img7 from "../images/backgrounds/chapter-3/7.PNG";
import background_chapter3_img8 from "../images/backgrounds/chapter-3/8.PNG";
//Import Background Chapter 4
import background_chapter4_img1 from "../images/backgrounds/chapter-4/1.PNG";
import background_chapter4_img2 from "../images/backgrounds/chapter-4/2.PNG";

const toDataURL = (url) =>
  fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );

// Background Chapter 0

export const backgroundChapter0Image1 = () => {
  return toDataURL(background_chapter0_img1);
};

export const backgroundChapter0Image2 = () => {
  return toDataURL(background_chapter0_img2);
};

export const backgroundChapter0Image3 = () => {
  return toDataURL(background_chapter0_img3);
};

export const backgroundChapter0Image4 = () => {
  return toDataURL(background_chapter0_img4);
};

export const backgroundChapter0Image5 = () => {
  return toDataURL(background_chapter0_img5);
};

export const backgroundChapter0Image6 = () => {
  return toDataURL(background_chapter0_img6);
};

export const backgroundChapter0Image7 = () => {
  return toDataURL(background_chapter0_img7);
};

// Background Chapter 1

export const backgroundChapter1Image1 = () => {
  return toDataURL(background_chapter1_img1);
};

export const backgroundChapter1Image2 = () => {
  return toDataURL(background_chapter1_img2);
};

export const backgroundChapter1Image3 = () => {
  return toDataURL(background_chapter1_img3);
};

export const backgroundChapter1Image4 = () => {
  return toDataURL(background_chapter1_img4);
};

export const backgroundChapter1Image5 = () => {
  return toDataURL(background_chapter1_img5);
};

// Background Chapter 2
export const backgroundChapter2Image1 = () => {
  return toDataURL(background_chapter2_img1);
};

export const backgroundChapter2Image2 = () => {
  return toDataURL(background_chapter2_img2);
};

// Background Chapter 3

export const backgroundChapter3Image1 = () => {
  return toDataURL(background_chapter3_img1);
};

export const backgroundChapter3Image2 = () => {
  return toDataURL(background_chapter3_img2);
};

export const backgroundChapter3Image3 = () => {
  return toDataURL(background_chapter3_img3);
};

export const backgroundChapter3Image4 = () => {
  return toDataURL(background_chapter3_img4);
};

export const backgroundChapter3Image5 = () => {
  return toDataURL(background_chapter3_img5);
};

export const backgroundChapter3Image6 = () => {
  return toDataURL(background_chapter3_img6);
};

export const backgroundChapter3Image7 = () => {
  return toDataURL(background_chapter3_img7);
};

export const backgroundChapter3Image8 = () => {
  return toDataURL(background_chapter3_img8);
};

// Background Chapter 4

export const backgroundChapter4Image1 = () => {
  return toDataURL(background_chapter4_img1);
};

export const backgroundChapter4Image2 = () => {
  return toDataURL(background_chapter4_img2);
};
