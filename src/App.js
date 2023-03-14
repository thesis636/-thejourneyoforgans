import * as React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import BackgroundAudio from "./components/audio/background";
import ClockAudio from "./components/audio/clock";

import Chapter0 from "./views/chapter-0";
import Chapter1 from "./views/chapter-1";
import Chapter2 from "./views/chapter-2";
import Chapter3 from "./views/chapter-3";
import Chapter4 from "./views/chapter-4";
import Chapter5BTS from "./views/chapter-5/bts";
import Chapter5Motorcycle from "./views/chapter-5/motorcycle";
import Chapter5Walk from "./views/chapter-5/walk";
import Chapter6 from "./views/chapter-6";
import Chapter7 from "./views/chapter-7";
import Chapter8 from "./views/chapter-8";
import Chapter9 from "./views/chapter-9";
import Chapter10 from "./views/chapter-10";
import Chapter11 from "./views/chapter-11";
import Chapter12 from "./views/chapter-12";
import Chapter13 from "./views/chapter-13";

function App() {
  return (
    <div className="app">
      <div className="app-wrapper">
        <Chapter0></Chapter0>
        <Chapter1></Chapter1>
        <Chapter2></Chapter2>
        <Chapter3></Chapter3>
        <Chapter4></Chapter4>
        <Chapter5BTS></Chapter5BTS>
        <Chapter5Motorcycle></Chapter5Motorcycle>
        <Chapter5Walk></Chapter5Walk>
        <Chapter6></Chapter6>
        <Chapter7></Chapter7>
        <Chapter8></Chapter8>
        <Chapter9></Chapter9>
        <Chapter10></Chapter10>
        <Chapter11></Chapter11>
        <Chapter12></Chapter12>
        <Chapter13></Chapter13>
      </div>
      {/* <BackgroundAudio></BackgroundAudio> */}
      {/* <ClockAudio></ClockAudio> */}
      <div className="load-image-bg-0"></div>
      <div className="load-image-bg-1"></div>
      <div className="load-image-bg-2"></div>
      <div className="load-image-bg-3"></div>
      <div className="load-image-bg-4"></div>
      <div className="load-image-bg-5-bts"></div>
      <div className="load-image-bg-5-motorcycle"></div>
      <div className="load-image-bg-5-walk"></div>
      <div className="load-image-bg-6"></div>
      <div className="load-image-bg-7"></div>
      <div className="load-image-bg-8"></div>
      <div className="load-image-bg-9"></div>
      <div className="load-image-bg-10"></div>
      <div className="load-image-bg-11"></div>
      <div className="load-image-bg-12"></div>
    </div>
  );
}

export default App;
