import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Scene1_3Page from "./Scene1_3";
import Scene4_5Page from "./Scene4_5";
import Scene6_7Page from "./Scene6_7";
import Scene8_11Page from "./Scene8_11";
import Scene12_13Page from "./Scene12_13";
import Scene14Page from "./Scene14";
import Scene15_23Page from "./Scene15_23";
import Scene24_26Page from "./Scene24_26";
import Scene27_29Page from "./Scene27_29";
import Scene30_32Page from "./Scene30_32";
import Scene33_34Page from "./Scene33_34";
import Scene35_38Page from "./Scene35_38";
import Scene39Page from "./Scene39";
import Scene40_44Page from "./Scene40_44";
import Scene45_53Page from "./Scene45_53";
import Scene54_55Page from "./Scene54_55";
import Scene56_57Page from "./Scene56_57";
import Scene58_62Page from "./Scene58_62";
import Scene63_65Page from "./Scene63_65";
import Scene66_67Page from "./Scene66_67";
import Scene68Page from "./Scene68";
import Scene69_74Page from "./Scene69_74";
import Scene75_76Page from "./Scene75_76";
import Scene77_81Page from "./Scene77_81";
import Scene82_83Page from "./Scene82_83";
import Scene84_85Page from "./Scene84_85";

export default function AllPage({ videos, audios }) {
  const [audioBGPlay, setAudioBGPlay] = React.useState(false);
  const [audioAlarmPlay, setAudioAlarmPlay] = React.useState(false);
  const [audioOpenDoorPlay, setAudioOpenDoorPlay] = React.useState(false);
  const [audioBTSPlay, setAudioBTSPlay] = React.useState(false);
  const [audioMotorcyclePlay, setAudioMotorcyclePlay] = React.useState(false);
  const [audioHitByCarPlay, setAudioHitByCarPlay] = React.useState(false);
  const [audioCarsPlay, setAudioCarsPlay] = React.useState(false);
  const [audioAmbuPlay, setAudioAmbuPlay] = React.useState(false);
  const [audioPeoplePlay, setAudioPeoplePlay] = React.useState(false);
  const [audioSadPlay, setAudioSadPlay] = React.useState(false);

  const audioBGEl = React.useRef(null);
  const audioAlarmEl = React.useRef(null);
  const audioOpenDoorEl = React.useRef(null);
  const audioBTSEl = React.useRef(null);
  const audioMotorcycleEl = React.useRef(null);
  const audioHitByCarEl = React.useRef(null);
  const audioCarsEl = React.useRef(null);
  const audioAmbuEl = React.useRef(null);
  const audioPeopleEl = React.useRef(null);
  const audioSadEl = React.useRef(null);

  React.useEffect(() => {
    if (audioBGEl.current) {
      if (audioBGPlay) {
        audioBGEl.current.play();
      }
    }
  }, [audioBGPlay]);

  React.useEffect(() => {
    if (audioAlarmEl.current) {
      if (audioAlarmPlay) {
        audioAlarmEl.current.play();
      }
    }
  }, [audioAlarmPlay]);

  React.useEffect(() => {
    if (audioOpenDoorEl.current) {
      if (audioOpenDoorPlay) {
        audioOpenDoorEl.current.play();
      }
    }
  }, [audioOpenDoorPlay]);

  React.useEffect(() => {
    if (audioBTSEl.current) {
      if (audioBTSPlay) {
        audioBTSEl.current.play();
      }
    }
  }, [audioBTSPlay]);

  React.useEffect(() => {
    if (audioMotorcycleEl.current) {
      if (audioMotorcyclePlay) {
        audioMotorcycleEl.current.play();
      }
    }
  }, [audioMotorcyclePlay]);

  React.useEffect(() => {
    if (audioHitByCarEl.current) {
      if (audioHitByCarPlay) {
        audioHitByCarEl.current.play();
      }
    }
  }, [audioHitByCarPlay]);

  React.useEffect(() => {
    if (audioCarsEl.current) {
      if (audioCarsPlay) {
        audioCarsEl.current.play();
      }
    }
  }, [audioCarsPlay]);

  React.useEffect(() => {
    if (audioAmbuEl.current) {
      if (audioAmbuPlay) {
        audioAmbuEl.current.play();
      }
    }
  }, [audioAmbuPlay]);

  React.useEffect(() => {
    if (audioPeopleEl.current) {
      if (audioPeoplePlay) {
        audioPeopleEl.current.play();
      }
    }
  }, [audioPeoplePlay]);

  React.useEffect(() => {
    if (audioSadEl.current) {
      if (audioSadPlay) {
        audioSadEl.current.play();
      }
    }
  }, [audioSadPlay]);

  function playAudio() { 
    audioBGEl.current.play();
  } 
  

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="max-w-[515px] h-full mx-auto relative">
            {audioBGPlay && (
              <audio
                ref={audioBGEl}
                autoPlay
                loop
                playsInline
                onPlaying={(event) => {
                  console.log("onPlaying");
                }}
                src={audios.find((audio) => audio.name === "audio_bg").urlBlob}
              ></audio>
            )}
            {audioAlarmPlay && (
              <audio
                ref={audioAlarmEl}
                autoPlay
                playsInline
                onPlaying={(event) => {
                  console.log("onPlaying");
                }}
                onCanPlay={(event) => {
                  setTimeout(() => {
                    setAudioAlarmPlay(false);
                  }, event.target.duration * 1000);
                }}
                src={
                  audios.find((audio) => audio.name === "audio_alarm").urlBlob
                }
              ></audio>
            )}
            {audioOpenDoorPlay && (
              <audio
                ref={audioOpenDoorEl}
                autoPlay
                playsInline
                onPlaying={(event) => {
                  console.log("onPlaying");
                }}
                onCanPlay={(event) => {
                  setTimeout(() => {
                    setAudioOpenDoorPlay(false);
                  }, event.target.duration * 1000);
                }}
                src={
                  audios.find((audio) => audio.name === "audio_openDoor")
                    .urlBlob
                }
              ></audio>
            )}
            {audioBTSPlay && (
              <audio
                ref={audioBTSEl}
                autoPlay
                playsInline
                onPlaying={(event) => {
                  console.log("onPlaying");
                }}
                onCanPlay={(event) => {
                  setTimeout(() => {
                    setAudioBTSPlay(false);
                  }, event.target.duration * 1000);
                }}
                src={audios.find((audio) => audio.name === "audio_bts").urlBlob}
              ></audio>
            )}
            {audioMotorcyclePlay && (
              <audio
                ref={audioMotorcycleEl}
                autoPlay
                playsInline
                onPlaying={(event) => {
                  console.log("onPlaying");
                }}
                onCanPlay={(event) => {
                  setTimeout(() => {
                    setAudioMotorcyclePlay(false);
                  }, event.target.duration * 1000);
                }}
                src={
                  audios.find((audio) => audio.name === "audio_motorcycle")
                    .urlBlob
                }
              ></audio>
            )}
            {audioHitByCarPlay && (
              <audio
                ref={audioHitByCarEl}
                autoPlay
                playsInline
                onPlaying={(event) => {
                  console.log("onPlaying");
                }}
                onCanPlay={(event) => {
                  setTimeout(() => {
                    setAudioHitByCarPlay(false);
                  }, event.target.duration * 1000);
                }}
                src={
                  audios.find((audio) => audio.name === "audio_hitByCar")
                    .urlBlob
                }
              ></audio>
            )}
            {audioCarsPlay && (
              <audio
                ref={audioCarsEl}
                autoPlay
                loop
                playsInline
                onPlaying={(event) => {
                  console.log("onPlaying");
                }}
                src={
                  audios.find((audio) => audio.name === "audio_cars").urlBlob
                }
                style={{
                  display: "none",
                }}
              ></audio>
            )}
            {audioAmbuPlay && (
              <audio
                ref={audioAmbuEl}
                autoPlay
                loop
                playsInline
                onPlaying={(event) => {
                  console.log("onPlaying");
                }}
                src={
                  audios.find((audio) => audio.name === "audio_ambu").urlBlob
                }
              ></audio>
            )}
            {audioPeoplePlay && (
              <audio
                ref={audioPeopleEl}
                autoPlay
                loop
                playsInline
                onPlaying={(event) => {
                  console.log("onPlaying");
                }}
                src={
                  audios.find((audio) => audio.name === "audio_people").urlBlob
                }
              ></audio>
            )}
            {audioSadPlay && (
              <audio
                ref={audioSadEl}
                autoPlay
                loop
                playsInline
                onPlaying={(event) => {
                  console.log("onPlaying");
                }}
                src={audios.find((audio) => audio.name === "audio_sad").urlBlob}
              ></audio>
            )}
            <Outlet></Outlet>
          </div>
        }
      >
        <Route
          index
          element={
            <Scene1_3Page
              getVideos={videos}
              setAudioPlayFunc={(val) => setAudioBGPlay(val)}
            ></Scene1_3Page>
          }
        />
        <Route
          path="scene4-5"
          element={
            <Scene4_5Page
              getVideos={videos}
              setAudioPlayFunc={(val) => setAudioAlarmPlay(val)}
            ></Scene4_5Page>
          }
        />
        <Route
          path="scene6-7"
          element={
            <Scene6_7Page
              getVideos={videos}
              setAudioPlayFunc={(val) => setAudioOpenDoorPlay(val)}
            ></Scene6_7Page>
          }
        />
        <Route
          path="scene8-11"
          element={
            <Scene8_11Page
              setAudioBTSPlayFunc={(val) => setAudioBTSPlay(val)}
              setAudioMotorcyclePlayFunc={(val) => setAudioMotorcyclePlay(val)}
              setAudioCarsPlayFunc={(val) => setAudioCarsPlay(val)}
              setAudioHitByCarPlayFunc={(val) => setAudioHitByCarPlay(val)}
              setAudioBackgroundPlayFunc={(val) => setAudioBGPlay(val)}
              getVideos={videos}
            ></Scene8_11Page>
          }
        />
        <Route
          path="scene12-13"
          element={
            <Scene12_13Page
              setAudioAmbuPlayFunc={(val) => setAudioAmbuPlay(val)}
              setAudioPeoplePlayFunc={(val) => setAudioPeoplePlay(val)}
              getVideos={videos}
            ></Scene12_13Page>
          }
        />
        <Route
          path="scene14"
          element={
            <Scene14Page
              setAudioSadPlayFunc={(val) => setAudioSadPlay(val)}
            ></Scene14Page>
          }
        />
        <Route
          path="scene15-23"
          element={<Scene15_23Page getVideos={videos}></Scene15_23Page>}
        />
        <Route
          path="scene24-26"
          element={<Scene24_26Page getVideos={videos}></Scene24_26Page>}
        />
        <Route
          path="scene27-29"
          element={<Scene27_29Page getVideos={videos}></Scene27_29Page>}
        />
        <Route
          path="scene30-32"
          element={<Scene30_32Page getVideos={videos}></Scene30_32Page>}
        />
        <Route
          path="scene33-34"
          element={
            <Scene33_34Page
              getVideos={videos}
              setAudioBGPlayFunc={(val) => setAudioBGPlay(val)}
              setAudioSadPlayFunc={(val) => setAudioSadPlay(val)}
            ></Scene33_34Page>
          }
        />
        <Route
          path="scene35-38"
          element={<Scene35_38Page getVideos={videos}></Scene35_38Page>}
        />
        <Route
          path="scene39"
          element={<Scene39Page getVideos={videos}></Scene39Page>}
        />
        <Route
          path="scene40-44"
          element={<Scene40_44Page getVideos={videos}></Scene40_44Page>}
        />
        <Route
          path="scene45-53"
          element={
            <Scene45_53Page
              getVideos={videos}
              setAudioAmbuPlayFunc={(val) => setAudioAmbuPlay(val)}
            ></Scene45_53Page>
          }
        />
        <Route
          path="scene54-55"
          element={<Scene54_55Page getVideos={videos}></Scene54_55Page>}
        />
        <Route
          path="scene56-57"
          element={<Scene56_57Page getVideos={videos}></Scene56_57Page>}
        />
        <Route
          path="scene58-62"
          element={<Scene58_62Page getVideos={videos}></Scene58_62Page>}
        />
        <Route
          path="scene63-65"
          element={<Scene63_65Page getVideos={videos}></Scene63_65Page>}
        />
        <Route
          path="scene66-67"
          element={<Scene66_67Page getVideos={videos}></Scene66_67Page>}
        />
        <Route
          path="scene68"
          element={<Scene68Page getVideos={videos}></Scene68Page>}
        />
        <Route
          path="scene69-74"
          element={<Scene69_74Page getVideos={videos}></Scene69_74Page>}
        />
        <Route
          path="scene75-76"
          element={<Scene75_76Page getVideos={videos}></Scene75_76Page>}
        />
        <Route
          path="scene77-81"
          element={<Scene77_81Page getVideos={videos}></Scene77_81Page>}
        />
        <Route
          path="scene82-83"
          element={<Scene82_83Page getVideos={videos}></Scene82_83Page>}
        />
        <Route
          path="scene84-85"
          element={<Scene84_85Page getVideos={videos}></Scene84_85Page>}
        />
      </Route>
    </Routes>
  );
}
