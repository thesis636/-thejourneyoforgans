import toDataURL from "../../libs/toDataURL";

import img1 from "../../images/backgrounds/chapter75-76/1.jpeg";
import img2 from "../../images/backgrounds/chapter75-76/2.jpeg";

export const chapter75Image1Service = () => {
  return toDataURL(img1);
};

export const chapter75Image2Service = () => {
  return toDataURL(img2);
};
