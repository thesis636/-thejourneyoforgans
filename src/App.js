import * as React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import Chapter1 from "./views/chapter1";
import Chapter2 from "./views/chapter2";
import Chapter3 from "./views/chapter3";
import Chapter4 from "./views/chapter4";
import Chapter5 from "./views/chapter5";
import Chapter6 from "./views/chapter6";
import Chapter7 from "./views/chapter7";
import Chapter8BTS from "./views/chapter8/bts";
import Chapter8Motorcycle from "./views/chapter8/motorcycle";
import Chapter8Walk from "./views/chapter8/walk";
import Chapter9 from "./views/chapter9";
import Chapter10 from "./views/chapter10";
import Chapter11 from "./views/chapter11";
import Chapter12 from "./views/chapter12";
import Chapter13 from "./views/chapter13";
import Chapter14 from "./views/chapter14";
import Chapter15 from "./views/chapter15";
import Chapter16 from "./views/chapter16";
import Chapter17 from "./views/chapter17";
import Chapter18 from "./views/chapter18";
import Chapter19 from "./views/chapter19";
import Chapter20 from "./views/chapter20";
import Chapter21 from "./views/chapter21";
import Chapter22 from "./views/chapter22";
import Chapter23 from "./views/chapter23";
import Chapter24 from "./views/chapter24";
import Chapter25 from "./views/chapter25";
import Chapter26 from "./views/chapter26";
import Chapter27 from "./views/chapter27";
import Chapter28 from "./views/chapter28";
import Chapter29 from "./views/chapter29";
import Chapter30 from "./views/chapter30";
import Chapter31 from "./views/chapter31";
import Chapter32 from "./views/chapter32";
import Chapter33 from "./views/chapter33";
import Chapter34 from "./views/chapter34";
import Chapter35 from "./views/chapter35";
import Chapter36 from "./views/chapter36";
import Chapter37 from "./views/chapter37";
import Chapter38 from "./views/chapter38";
import Chapter39 from "./views/chapter39";
import Chapter40 from "./views/chapter40";
import Chapter41 from "./views/chapter41";
import Chapter42 from "./views/chapter42";
import Chapter43 from "./views/chapter43";
import Chapter44 from "./views/chapter44";
import Chapter45 from "./views/chapter45";
import Chapter46 from "./views/chapter46";
import Chapter47 from "./views/chapter47";
import Chapter48 from "./views/chapter48";
import Chapter49 from "./views/chapter49";
import Chapter50 from "./views/chapter50";
import Chapter51 from "./views/chapter51";
import Chapter52 from "./views/chapter52";
import Chapter53 from "./views/chapter53";
import Chapter54 from "./views/chapter54";
import Chapter55 from "./views/chapter55";
import Chapter56 from "./views/chapter56";
import Chapter57 from "./views/chapter57";
import Chapter58 from "./views/chapter58";
import Chapter59 from "./views/chapter59";
import Chapter60 from "./views/chapter60";
import Chapter61 from "./views/chapter61";
import Chapter62 from "./views/chapter62";
import Chapter63 from "./views/chapter63";
import Chapter64 from "./views/chapter64";
import Chapter65 from "./views/chapter65";
import Chapter66 from "./views/chapter66";
import Chapter67 from "./views/chapter67";
import Chapter68 from "./views/chapter68";
import Chapter69 from "./views/chapter69";
import Chapter70 from "./views/chapter70";
import Chapter71 from "./views/chapter71";
import Chapter72 from "./views/chapter72";
import Chapter73 from "./views/chapter73";
import Chapter74 from "./views/chapter74";
import Chapter75 from "./views/chapter75";
import Chapter76 from "./views/chapter76";
import Chapter77 from "./views/chapter77";
import Chapter78 from "./views/chapter78";
import Chapter79 from "./views/chapter79";
import Chapter80 from "./views/chapter80";
import Chapter81 from "./views/chapter81";
import Chapter82 from "./views/chapter82";
import Chapter83 from "./views/chapter83";
import Chapter84 from "./views/chapter84";
import Chapter85 from "./views/chapter85";
import { chapter1ImageAction } from "./actions/chapter1/image.action";
import AudioChapter3 from "./components/audio/chapter3";
import AudioChapter4 from "./components/audio/chapter4";
import AudioChapter6 from "./components/audio/chapter6";
import AudioChapter8BTS from "./components/audio/chapter8/bts";
import AudioChapter8Motorcycle from "./components/audio/chapter8/motorcycle";
import AudioChapter9 from "./components/audio/chapter9";
import AudioChapter11 from "./components/audio/chapter11";
import AudioChapter12 from "./components/audio/chapter12";
import AudioChapter14 from "./components/audio/chapter14";
import AudioChapter32 from "./components/audio/chapter32";
import AudioChapter49 from "./components/audio/chapter49";
import AudioChapter68 from "./components/audio/chapter68";

function App() {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const messageReducer = useSelector((state) => state.messageReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (backgroundReducer.chapter === "0") {
      dispatch(chapter1ImageAction());
      dispatch({ type: "SET_BACKGROUND", payload: "1" });
      dispatch({ type: "SET_MESSAGE", payload: "1" });
    }
  }, []);
  return (
    <div className="app">
      <div className="app-wrapper">
        {backgroundReducer.chapter === "1" && <Chapter1></Chapter1>}
        {backgroundReducer.chapter === "2" && <Chapter2></Chapter2>}
        {backgroundReducer.chapter === "3" && <Chapter3></Chapter3>}
        {backgroundReducer.chapter === "4" && <Chapter4></Chapter4>}
        {backgroundReducer.chapter === "5" && <Chapter5></Chapter5>}
        {backgroundReducer.chapter === "6" && <Chapter6></Chapter6>}
        {backgroundReducer.chapter === "7" && <Chapter7></Chapter7>}
        {backgroundReducer.chapter === "8-bts" && <Chapter8BTS></Chapter8BTS>}
        {backgroundReducer.chapter === "8-motorcycle" && (
          <Chapter8Motorcycle></Chapter8Motorcycle>
        )}
        {backgroundReducer.chapter === "8-walk" && (
          <Chapter8Walk></Chapter8Walk>
        )}
        {backgroundReducer.chapter === "9" && <Chapter9></Chapter9>}
        {backgroundReducer.chapter === "10" && <Chapter10></Chapter10>}
        {backgroundReducer.chapter === "11" && <Chapter11></Chapter11>}
        {backgroundReducer.chapter === "12" && <Chapter12></Chapter12>}
        {backgroundReducer.chapter === "13" && <Chapter13></Chapter13>}
        {backgroundReducer.chapter === "14" && <Chapter14></Chapter14>}
        {backgroundReducer.chapter === "15" && <Chapter15></Chapter15>}
        {backgroundReducer.chapter === "16" && <Chapter16></Chapter16>}
        {backgroundReducer.chapter === "17" && <Chapter17></Chapter17>}
        {backgroundReducer.chapter === "18" && <Chapter18></Chapter18>}
        {backgroundReducer.chapter === "19" && <Chapter19></Chapter19>}
        {backgroundReducer.chapter === "20" && <Chapter20></Chapter20>}
        {backgroundReducer.chapter === "21" && <Chapter21></Chapter21>}
        {backgroundReducer.chapter === "22" && <Chapter22></Chapter22>}
        {backgroundReducer.chapter === "23" && <Chapter23></Chapter23>}
        {backgroundReducer.chapter === "24" && <Chapter24></Chapter24>}
        {backgroundReducer.chapter === "25" && <Chapter25></Chapter25>}
        {backgroundReducer.chapter === "26" && <Chapter26></Chapter26>}
        {backgroundReducer.chapter === "27" && <Chapter27></Chapter27>}
        {backgroundReducer.chapter === "28" && <Chapter28></Chapter28>}
        {backgroundReducer.chapter === "29" && <Chapter29></Chapter29>}
        {backgroundReducer.chapter === "30" && <Chapter30></Chapter30>}
        {backgroundReducer.chapter === "31" && <Chapter31></Chapter31>}
        {backgroundReducer.chapter === "32" && <Chapter32></Chapter32>}
        {backgroundReducer.chapter === "33" && <Chapter33></Chapter33>}
        {backgroundReducer.chapter === "34" && <Chapter34></Chapter34>}
        {backgroundReducer.chapter === "35" && <Chapter35></Chapter35>}
        {backgroundReducer.chapter === "36" && <Chapter36></Chapter36>}
        {backgroundReducer.chapter === "37" && <Chapter37></Chapter37>}
        {backgroundReducer.chapter === "38" && <Chapter38></Chapter38>}
        {backgroundReducer.chapter === "39" && <Chapter39></Chapter39>}
        {backgroundReducer.chapter === "40" && <Chapter40></Chapter40>}
        {backgroundReducer.chapter === "41" && <Chapter41></Chapter41>}
        {backgroundReducer.chapter === "42" && <Chapter42></Chapter42>}
        {backgroundReducer.chapter === "43" && <Chapter43></Chapter43>}
        {backgroundReducer.chapter === "44" && <Chapter44></Chapter44>}
        {backgroundReducer.chapter === "45" && <Chapter45></Chapter45>}
        {backgroundReducer.chapter === "46" && <Chapter46></Chapter46>}
        {backgroundReducer.chapter === "47" && <Chapter47></Chapter47>}
        {backgroundReducer.chapter === "48" && <Chapter48></Chapter48>}
        {backgroundReducer.chapter === "49" && <Chapter49></Chapter49>}
        {backgroundReducer.chapter === "50" && <Chapter50></Chapter50>}
        {backgroundReducer.chapter === "51" && <Chapter51></Chapter51>}
        {backgroundReducer.chapter === "52" && <Chapter52></Chapter52>}
        {backgroundReducer.chapter === "53" && <Chapter53></Chapter53>}
        {backgroundReducer.chapter === "54" && <Chapter54></Chapter54>}
        {backgroundReducer.chapter === "55" && <Chapter55></Chapter55>}
        {backgroundReducer.chapter === "56" && <Chapter56></Chapter56>}
        {backgroundReducer.chapter === "57" && <Chapter57></Chapter57>}
        {backgroundReducer.chapter === "58" && <Chapter58></Chapter58>}
        {backgroundReducer.chapter === "59" && <Chapter59></Chapter59>}
        {backgroundReducer.chapter === "60" && <Chapter60></Chapter60>}
        {backgroundReducer.chapter === "61" && <Chapter61></Chapter61>}
        {backgroundReducer.chapter === "62" && <Chapter62></Chapter62>}
        {backgroundReducer.chapter === "63" && <Chapter63></Chapter63>}
        {backgroundReducer.chapter === "64" && <Chapter64></Chapter64>}
        {backgroundReducer.chapter === "65" && <Chapter65></Chapter65>}
        {backgroundReducer.chapter === "66" && <Chapter66></Chapter66>}
        {backgroundReducer.chapter === "67" && <Chapter67></Chapter67>}
        {backgroundReducer.chapter === "68" && <Chapter68></Chapter68>}
        {backgroundReducer.chapter === "69" && <Chapter69></Chapter69>}
        {backgroundReducer.chapter === "70" && <Chapter70></Chapter70>}
        {backgroundReducer.chapter === "71" && <Chapter71></Chapter71>}
        {backgroundReducer.chapter === "72" && <Chapter72></Chapter72>}
        {backgroundReducer.chapter === "73" && <Chapter73></Chapter73>}
        {backgroundReducer.chapter === "74" && <Chapter74></Chapter74>}
        {backgroundReducer.chapter === "75" && <Chapter75></Chapter75>}
        {backgroundReducer.chapter === "76" && <Chapter76></Chapter76>}
        {backgroundReducer.chapter === "77" && <Chapter77></Chapter77>}
        {backgroundReducer.chapter === "78" && <Chapter78></Chapter78>}
        {backgroundReducer.chapter === "79" && <Chapter79></Chapter79>}
        {backgroundReducer.chapter === "80" && <Chapter80></Chapter80>}
        {backgroundReducer.chapter === "81" && <Chapter81></Chapter81>}
        {backgroundReducer.chapter === "82" && <Chapter82></Chapter82>}
        {backgroundReducer.chapter === "83" && <Chapter83></Chapter83>}
        {backgroundReducer.chapter === "84" && <Chapter84></Chapter84>}
        {backgroundReducer.chapter === "85" && <Chapter85></Chapter85>}
        
      </div>
      {/* <BackgroundAudio></BackgroundAudio> */}
      {/* <ClockAudio></ClockAudio> */}
      {/* <div class="load-image-bg-1"></div>
      <div class="load-image-bg-2"></div>
      <div class="load-image-bg-3"></div>
      <div class="load-image-bg-4"></div>
      <div className="load-image-bg-5"></div>
      <div className="load-image-bg-6"></div>
      <div className="load-image-bg-7"></div>
      <div className="load-image-bg-8-bts"></div>
      <div className="load-image-bg-8-motorcycle"></div>
      <div className="load-image-bg-8-walk"></div>
      <div className="load-image-bg-9"></div>
      <div className="load-image-bg-10"></div> */}
      {/* <div className="load-image-bg-11"></div> */}
      {/* <div className="load-image-bg-12"></div> */}
      {/* <div className="load-image-bg-13"></div> */}
    </div>
  );
}

export default App;
