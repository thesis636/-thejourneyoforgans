import toDataURL from "../../libs/toDataURL";

import img1 from "../../images/backgrounds/chapter16-17-18-32/1.jpeg";
import img2 from "../../images/backgrounds/chapter16-17-18-32/2.jpeg";
import img3 from "../../images/backgrounds/chapter16-17-18-32/3.jpeg";

export const chapter16Image1Service = () => {
  return toDataURL(img1);
};

export const chapter16Image2Service = () => {
  return toDataURL(img2);
};

export const chapter16Image3Service = () => {
  return toDataURL(img3);
};