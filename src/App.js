import "./App.css";
import React from "react";
import axios from "axios";
import "./animation.css";
import { useLocation } from "react-router-dom";

import AllPage from "./pages";

// const { encode } = require("base64-js");

const fileVideos = [
  {
    name: "video1_loop",
    file: require("./videos/1_loop.mp4"),
  },
  {
    name: "video4",
    file: require("./videos/4.mp4"),
  },
  {
    name: "video5_loop",
    file: require("./videos/5_loop.mp4"),
  },
  {
    name: "video6",
    file: require("./videos/scene-6.mp4"),
  },
  {
    name: "video7_loop",
    file: require("./videos/scene-7.mp4"),
  },
  {
    name: "video8_bts",
    file: require("./videos/8_bts.mp4"),
  },
  {
    name: "video8_motorcycle",
    file: require("./videos/8_motorcycle.mp4"),
  },
  {
    name: "video8_walk",
    file: require("./videos/scene8_walk.mp4"),
  },
  {
    name: "video9-10_loop",
    file: require("./videos/9-10_loop.mp4"),
  },
  {
    name: "video11",
    file: require("./videos/11.mp4"),
  },
  {
    name: "video12-13",
    file: require("./videos/scene12-13.mp4"),
  },
  {
    name: "video14_loop",
    file: require("./videos/14_loop.mp4"),
  },
  {
    name: "video15",
    file: require("./videos/scene-15.mp4"),
  },
  {
    name: "video16_fade",
    file: require("./videos/16_fade.mp4"),
  },
  {
    name: "video16_loop",
    file: require("./videos/16_loop.mp4"),
  },
  {
    name: "video19_loop",
    file: require("./videos/19_loop.mp4"),
  },
  {
    name: "video24_loop",
    file: require("./videos/24_loop.mp4"),
  },
  {
    name: "video27_loop",
    file: require("./videos/27_loop.mp4"),
  },
  {
    name: "video29",
    file: require("./videos/29.mp4"),
  },
  {
    name: "video30_loop",
    file: require("./videos/30_loop.mp4"),
  },
  {
    name: "video32_loop",
    file: require("./videos/32_loop.mp4"),
  },
  {
    name: "video34",
    file: require("./videos/34.mp4"),
  },
  {
    name: "video35_loop",
    file: require("./videos/35_loop.mp4"),
  },
  {
    name: "video39_loop",
    file: require("./videos/39_loop.mp4"),
  },
  {
    name: "video40_loop",
    file: require("./videos/40_loop.mp4"),
  },
  {
    name: "video42_loop",
    file: require("./videos/42_loop.mp4"),
  },
  {
    name: "video43_loop",
    file: require("./videos/43_loop.mp4"),
  },
  {
    name: "video45_loop",
    file: require("./videos/45_loop.mp4"),
  },
  {
    name: "video47_loop",
    file: require("./videos/47_loop.mp4"),
  },
  {
    name: "video49-53_loop",
    file: require("./videos/49-to-53_loop.mp4"),
  },
  {
    name: "video49-53",
    file: require("./videos/49-to-53.mp4"),
  },
  {
    name: "video54-55_loop",
    file: require("./videos/54-55_loop.mp4"),
  },
  {
    name: "video56-57_loop",
    file: require("./videos/56-57_loop.mp4"),
  },
  {
    name: "video58-60_loop",
    file: require("./videos/58-60_loop.mp4"),
  },
  {
    name: "video61-62",
    file: require("./videos/61-62.mp4"),
  },
  {
    name: "video63-65_loop",
    file: require("./videos/63-65_loop.mp4"),
  },
  {
    name: "video66-67_loop",
    file: require("./videos/66-67_loop.mp4"),
  },
  {
    name: "video68_loop",
    file: require("./videos/68_loop.mp4"),
  },
  {
    name: "video69-72_loop",
    file: require("./videos/69-72_loop.mp4"),
  },
  {
    name: "video73-74_loop",
    file: require("./videos/73-74_loop.mp4"),
  },
  {
    name: "video75-76_loop",
    file: require("./videos/75-76_loop.mp4"),
  },
  {
    name: "video77-79_loop",
    file: require("./videos/77-79_loop.mp4"),
  },
  {
    name: "video80-81",
    file: require("./videos/80-81.mp4"),
  },
  {
    name: "video82-83_loop",
    file: require("./videos/82-83_loop.mp4"),
  },
  {
    name: "video84-85_loop",
    file: require("./videos/84-85_loop.mp4"),
  },
];

const fileAudios = [
  {
    name: "audio_alarm",
    file: require("./audios/alarm.mp3"),
  },
  {
    name: "audio_ambu",
    file: require("./audios/ambu.mp3"),
  },
  {
    name: "audio_bg",
    file: require("./audios/bg.mp3"),
  },
  {
    name: "audio_bts",
    file: require("./audios/bts.mp3"),
  },
  {
    name: "audio_cars",
    file: require("./audios/cars.mp3"),
  },
  {
    name: "audio_hitByCar",
    file: require("./audios/hit-by-car.mp3"),
  },
  {
    name: "audio_motorcycle",
    file: require("./audios/motorcycle.mp3"),
  },
  {
    name: "audio_openDoor",
    file: require("./audios/open-door.mp3"),
  },
  {
    name: "audio_people",
    file: require("./audios/people.mp3"),
  },
  {
    name: "audio_sad",
    file: require("./audios/sad.mp3"),
  },
];
function LoaderParent(props) {
  return (
    <div className="loaderParent">
      <p className="loader"></p>
      กำลังโหลดวิดีโอทั้งหมด...
      <p>
        video {props.countVideo}/{props.maxVideo} loading...
      </p>
      <p>
        audio {props.countAudio}/{props.maxAudio} loading...
      </p>
    </div>
  );
}

function App() {
  const [progress, setProgress] = React.useState(0);
  const [urlVideos, setUrlVideos] = React.useState([]);
  const [urlAudios, setUrlAudios] = React.useState([]);
  const [countVideo, setCountVideo] = React.useState(0);
  const [countAudio, setCountAudio] = React.useState(0);

  const location = useLocation();

  React.useEffect(() => {
    const data = [];
    var c = 0;
    fileVideos.map((obj, key, arr) => {
      // axios({
      //   method: "GET",
      //   url: obj.file,
      //   responseType: "blob",
      //   headers: {
      //     "Content-Type": "video/mp4",
      //   },
      //   onDownloadProgress: (progressEvent) => {
      //     const currentProgress = Math.round(
      //       (progressEvent.loaded * 100) / progressEvent.total
      //     );
      //     setProgress(currentProgress);
      //     if (currentProgress === 100) {
      //       c += 1;
      //       setCountVideo(c);
      //     }
      //   },
      // }).then((res) => {
      //   console.log(res.data);
      //   var urlBlob = URL.createObjectURL(res.data);
      //   data.push({
      //     name: obj.name,
      //     urlBlob: urlBlob,
      //     url: obj.file,
      //   });

      //   if (key === arr.length - 1) {
      //     setUrlVideos(data);
      //   }
      //   return res.data;
      // });
      data.push({
        name: obj.name,
        urlBlob: obj.file,
        url: obj.file,
      });

      if (key === arr.length - 1) {
        setUrlVideos(data);
      }
    });
  }, [fileVideos]);

  React.useEffect(() => {
    const data = [];
    var c = 0;
    fileAudios.map((obj, key, arr) => {
      // axios({
      //   method: "GET",
      //   url: obj.file,
      //   responseType: "blob",
      //   headers: {
      //     "Content-Type": "audio/mpeg",
      //   },
      //   onDownloadProgress: (progressEvent) => {
      //     const currentProgress = Math.round(
      //       (progressEvent.loaded * 100) / progressEvent.total
      //     );
      //     setProgress(currentProgress);
      //     if (currentProgress === 100) {
      //       c += 1;
      //       setCountAudio(c);
      //     }
      //   },
      // }).then((res) => {
      //   var urlBlob = URL.createObjectURL(res.data);
      //   data.push({
      //     name: obj.name,
      //     urlBlob: urlBlob,
      //     url: obj.file,
      //   });

      //   if (key === arr.length - 1) {
      //     setUrlAudios(data);
      //   }
      //   return res.data;
      // });

      data.push({
        name: obj.name,
        urlBlob: obj.file,
        url: obj.file,
      });

      if (key === arr.length - 1) {
        setUrlAudios(data);
      }
    });
  }, [fileAudios]);
  return (
    <>
      {urlVideos.length === fileVideos.length &&
        urlAudios.length === fileAudios.length && (
          <AllPage videos={urlVideos} audios={urlAudios}></AllPage>
        )}
      {/* {urlVideos.length === fileVideos.length &&
      urlAudios.length === fileAudios.length ? (
        <AllPage videos={urlVideos} audios={urlAudios}></AllPage>
      ) : (
        <React.Fragment>
          <LoaderParent
            countVideo={countVideo}
            maxVideo={fileVideos.length}
            countAudio={countAudio}
            maxAudio={fileAudios.length}
          ></LoaderParent>
        </React.Fragment>
      )} */}
    </>
  );
}

export default App;
