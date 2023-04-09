import toDataURL from "../../libs/toDataURL";

import img1 from "../../images/backgrounds/chapter15-84-85/1.jpeg";
import img2 from "../../images/backgrounds/chapter15-84-85/2.jpeg";
import img3 from "../../images/backgrounds/chapter15-84-85/3.jpeg";

export const chapter15Image1Service = () => {
  return toDataURL(img1);
};

export const chapter15Image2Service = () => {
  return toDataURL(img2);
};

export const chapter15Image3Service = () => {
  return toDataURL(img3);
};