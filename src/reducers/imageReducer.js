const initState = {
  loading: true,
  chapter1: {
    loading: true,
    data: [],
  },
  chapter2: {
    loading: true,
    data: [],
  },
  chapter3: {
    loading: true,
    data: [],
  },
  chapter4: {
    loading: true,
    data: [],
  },
  chapter5: {
    loading: true,
    data: [],
  },
  chapter6: {
    loading: true,
    data: [],
  },
  chapter7: {
    loading: true,
    data: [],
  },
  chapter8: {
    loading: true,
    data: {
      bts: [],
      motorcycle: [],
      walk: [],
    },
  },
  chapter9: {
    loading: true,
    data: [],
  },
  chapter10: {
    loading: true,
    data: [],
  },
  chapter11: {
    loading: true,
    data: [],
  },
  chapter12: {
    loading: true,
    data: [],
  },
  chapter13: {
    loading: true,
    data: [],
  },
  chapter14: {
    loading: true,
    data: [],
  },
  chapter15: {
    loading: true,
    data: [],
  },
  chapter16: {
    loading: true,
    data: [],
  },
  chapter17: {
    loading: true,
    data: [],
  },
  chapter18: {
    loading: true,
    data: [],
  },
  chapter19: {
    loading: true,
    data: [],
  },
  chapter20: {
    loading: true,
    data: [],
  },
  chapter21: {
    loading: true,
    data: [],
  },
  chapter22: {
    loading: true,
    data: [],
  },
  chapter23: {
    loading: true,
    data: [],
  },
  chapter24: {
    loading: true,
    data: [],
  },
  chapter25: {
    loading: true,
    data: [],
  },
  chapter26: {
    loading: true,
    data: [],
  },
  chapter27: {
    loading: true,
    data: [],
  },
  chapter28: {
    loading: true,
    data: [],
  },
  chapter29: {
    loading: true,
    data: [],
  },
  chapter30: {
    loading: true,
    data: [],
  },
  chapter31: {
    loading: true,
    data: [],
  },
  chapter32: {
    loading: true,
    data: [],
  },
  chapter33: {
    loading: true,
    data: [],
  },
  chapter34: {
    loading: true,
    data: [],
  },
  chapter35: {
    loading: true,
    data: [],
  },
  chapter36: {
    loading: true,
    data: [],
  },
  chapter37: {
    loading: true,
    data: [],
  },
  chapter38: {
    loading: true,
    data: [],
  },
  chapter39: {
    loading: true,
    data: [],
  },
  chapter40: {
    loading: true,
    data: [],
  },
  chapter41: {
    loading: true,
    data: [],
  },
  chapter42: {
    loading: true,
    data: [],
  },
  chapter43: {
    loading: true,
    data: [],
  },
  chapter44: {
    loading: true,
    data: [],
  },
  chapter45: {
    loading: true,
    data: [],
  },
  chapter46: {
    loading: true,
    data: [],
  },
  chapter47: {
    loading: true,
    data: [],
  },
  chapter48: {
    loading: true,
    data: [],
  },
  chapter49: {
    loading: true,
    data: [],
  },
  chapter50: {
    loading: true,
    data: [],
  },
  chapter51: {
    loading: true,
    data: [],
  },
  chapter52: {
    loading: true,
    data: [],
  },
  chapter53: {
    loading: true,
    data: [],
  },
  chapter54: {
    loading: true,
    data: [],
  },
  chapter55: {
    loading: true,
    data: [],
  },
  chapter56: {
    loading: true,
    data: [],
  },
  chapter57: {
    loading: true,
    data: [],
  },
  chapter58: {
    loading: true,
    data: [],
  },
  chapter59: {
    loading: true,
    data: [],
  },
  chapter60: {
    loading: true,
    data: [],
  },
  chapter61: {
    loading: true,
    data: [],
  },
  chapter62: {
    loading: true,
    data: [],
  },
  chapter63: {
    loading: true,
    data: [],
  },
  chapter64: {
    loading: true,
    data: [],
  },
  chapter65: {
    loading: true,
    data: [],
  },
  chapter66: {
    loading: true,
    data: [],
  },
  chapter67: {
    loading: true,
    data: [],
  },
  chapter68: {
    loading: true,
    data: [],
  },
  chapter69: {
    loading: true,
    data: [],
  },
  chapter70: {
    loading: true,
    data: [],
  },
  chapter71: {
    loading: true,
    data: [],
  },
  chapter72: {
    loading: true,
    data: [],
  },
  chapter73: {
    loading: true,
    data: [],
  },
  chapter74: {
    loading: true,
    data: [],
  },
  chapter75: {
    loading: true,
    data: [],
  },
  chapter76: {
    loading: true,
    data: [],
  },
  chapter77: {
    loading: true,
    data: [],
  },
  chapter78: {
    loading: true,
    data: [],
  },
  chapter79: {
    loading: true,
    data: [],
  },
  chapter80: {
    loading: true,
    data: [],
  },
  chapter81: {
    loading: true,
    data: [],
  },
  chapter82: {
    loading: true,
    data: [],
  },
  chapter83: {
    loading: true,
    data: [],
  },
  chapter84: {
    loading: true,
    data: [],
  },
  chapter85: {
    loading: true,
    data: [],
  },
};

const imageReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_CHAPTER1_IMAGE":
      return {
        ...state,
        chapter1: {
          loading: state.chapter1.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER1_IMAGE_LOADING":
      return {
        ...state,
        chapter1: {
          data: state.chapter1.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER2_IMAGE":
      return {
        ...state,
        chapter2: {
          loading: state.chapter2.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER2_IMAGE_LOADING":
      return {
        ...state,
        chapter2: {
          data: state.chapter2.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER3_IMAGE":
      return {
        ...state,
        chapter3: {
          loading: state.chapter3.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER3_IMAGE_LOADING":
      return {
        ...state,
        chapter3: {
          data: state.chapter3.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER4_IMAGE":
      return {
        ...state,
        chapter4: {
          loading: state.chapter4.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER4_IMAGE_LOADING":
      return {
        ...state,
        chapter4: {
          data: state.chapter4.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER5_IMAGE":
      return {
        ...state,
        chapter5: {
          loading: state.chapter5.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER5_IMAGE_LOADING":
      return {
        ...state,
        chapter5: {
          data: state.chapter5.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER6_IMAGE":
      return {
        ...state,
        chapter6: {
          loading: state.chapter6.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER6_IMAGE_LOADING":
      return {
        ...state,
        chapter6: {
          data: state.chapter6.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER7_IMAGE":
      return {
        ...state,
        chapter7: {
          loading: state.chapter7.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER7_IMAGE_LOADING":
      return {
        ...state,
        chapter7: {
          data: state.chapter7.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER8_IMAGE":
      return {
        ...state,
        chapter8: {
          loading: state.chapter8.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER8_IMAGE_LOADING":
      return {
        ...state,
        chapter8: {
          data: state.chapter8.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER9_IMAGE":
      return {
        ...state,
        chapter9: {
          loading: state.chapter9.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER9_IMAGE_LOADING":
      return {
        ...state,
        chapter9: {
          data: state.chapter9.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER10_IMAGE":
      return {
        ...state,
        chapter10: {
          loading: state.chapter10.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER10_IMAGE_LOADING":
      return {
        ...state,
        chapter10: {
          data: state.chapter10.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER11_IMAGE":
      return {
        ...state,
        chapter11: {
          loading: state.chapter11.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER11_IMAGE_LOADING":
      return {
        ...state,
        chapter11: {
          data: state.chapter11.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER12_IMAGE":
      return {
        ...state,
        chapter12: {
          loading: state.chapter12.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER12_IMAGE_LOADING":
      return {
        ...state,
        chapter12: {
          data: state.chapter12.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER13_IMAGE":
      return {
        ...state,
        chapter13: {
          loading: state.chapter13.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER13_IMAGE_LOADING":
      return {
        ...state,
        chapter13: {
          data: state.chapter13.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER14_IMAGE":
      return {
        ...state,
        chapter14: {
          loading: state.chapter14.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER14_IMAGE_LOADING":
      return {
        ...state,
        chapter14: {
          data: state.chapter14.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER15_IMAGE":
      return {
        ...state,
        chapter15: {
          loading: state.chapter15.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER15_IMAGE_LOADING":
      return {
        ...state,
        chapter15: {
          data: state.chapter15.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER16_IMAGE":
      return {
        ...state,
        chapter16: {
          loading: state.chapter16.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER16_IMAGE_LOADING":
      return {
        ...state,
        chapter16: {
          data: state.chapter16.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER17_IMAGE":
      return {
        ...state,
        chapter17: {
          loading: state.chapter17.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER17_IMAGE_LOADING":
      return {
        ...state,
        chapter17: {
          data: state.chapter17.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER18_IMAGE":
      return {
        ...state,
        chapter18: {
          loading: state.chapter18.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER18_IMAGE_LOADING":
      return {
        ...state,
        chapter18: {
          data: state.chapter18.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER19_IMAGE":
      return {
        ...state,
        chapter19: {
          loading: state.chapter19.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER19_IMAGE_LOADING":
      return {
        ...state,
        chapter19: {
          data: state.chapter19.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER20_IMAGE":
      return {
        ...state,
        chapter20: {
          loading: state.chapter20.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER20_IMAGE_LOADING":
      return {
        ...state,
        chapter20: {
          data: state.chapter20.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER21_IMAGE":
      return {
        ...state,
        chapter21: {
          loading: state.chapter21.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER21_IMAGE_LOADING":
      return {
        ...state,
        chapter21: {
          data: state.chapter21.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER22_IMAGE":
      return {
        ...state,
        chapter22: {
          loading: state.chapter22.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER22_IMAGE_LOADING":
      return {
        ...state,
        chapter22: {
          data: state.chapter22.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER23_IMAGE":
      return {
        ...state,
        chapter23: {
          loading: state.chapter23.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER23_IMAGE_LOADING":
      return {
        ...state,
        chapter23: {
          data: state.chapter23.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER24_IMAGE":
      return {
        ...state,
        chapter24: {
          loading: state.chapter24.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER24_IMAGE_LOADING":
      return {
        ...state,
        chapter24: {
          data: state.chapter24.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER25_IMAGE":
      return {
        ...state,
        chapter25: {
          loading: state.chapter25.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER25_IMAGE_LOADING":
      return {
        ...state,
        chapter25: {
          data: state.chapter25.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER26_IMAGE":
      return {
        ...state,
        chapter26: {
          loading: state.chapter26.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER26_IMAGE_LOADING":
      return {
        ...state,
        chapter26: {
          data: state.chapter26.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER27_IMAGE":
      return {
        ...state,
        chapter27: {
          loading: state.chapter27.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER27_IMAGE_LOADING":
      return {
        ...state,
        chapter27: {
          data: state.chapter27.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER28_IMAGE":
      return {
        ...state,
        chapter28: {
          loading: state.chapter28.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER28_IMAGE_LOADING":
      return {
        ...state,
        chapter28: {
          data: state.chapter28.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER29_IMAGE":
      return {
        ...state,
        chapter29: {
          loading: state.chapter29.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER29_IMAGE_LOADING":
      return {
        ...state,
        chapter29: {
          data: state.chapter29.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER30_IMAGE":
      return {
        ...state,
        chapter30: {
          loading: state.chapter30.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER30_IMAGE_LOADING":
      return {
        ...state,
        chapter30: {
          data: state.chapter30.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER31_IMAGE":
      return {
        ...state,
        chapter31: {
          loading: state.chapter31.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER31_IMAGE_LOADING":
      return {
        ...state,
        chapter31: {
          data: state.chapter31.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER32_IMAGE":
      return {
        ...state,
        chapter32: {
          loading: state.chapter32.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER32_IMAGE_LOADING":
      return {
        ...state,
        chapter32: {
          data: state.chapter32.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER33_IMAGE":
      return {
        ...state,
        chapter33: {
          loading: state.chapter33.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER33_IMAGE_LOADING":
      return {
        ...state,
        chapter33: {
          data: state.chapter33.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER34_IMAGE":
      return {
        ...state,
        chapter34: {
          loading: state.chapter34.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER34_IMAGE_LOADING":
      return {
        ...state,
        chapter34: {
          data: state.chapter34.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER35_IMAGE":
      return {
        ...state,
        chapter35: {
          loading: state.chapter35.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER35_IMAGE_LOADING":
      return {
        ...state,
        chapter35: {
          data: state.chapter35.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER36_IMAGE":
      return {
        ...state,
        chapter36: {
          loading: state.chapter36.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER36_IMAGE_LOADING":
      return {
        ...state,
        chapter36: {
          data: state.chapter36.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER37_IMAGE":
      return {
        ...state,
        chapter37: {
          loading: state.chapter37.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER37_IMAGE_LOADING":
      return {
        ...state,
        chapter37: {
          data: state.chapter37.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER38_IMAGE":
      return {
        ...state,
        chapter38: {
          loading: state.chapter38.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER38_IMAGE_LOADING":
      return {
        ...state,
        chapter38: {
          data: state.chapter38.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER39_IMAGE":
      return {
        ...state,
        chapter39: {
          loading: state.chapter39.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER39_IMAGE_LOADING":
      return {
        ...state,
        chapter39: {
          data: state.chapter39.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER40_IMAGE":
      return {
        ...state,
        chapter40: {
          loading: state.chapter40.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER40_IMAGE_LOADING":
      return {
        ...state,
        chapter40: {
          data: state.chapter40.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER41_IMAGE":
      return {
        ...state,
        chapter41: {
          loading: state.chapter41.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER41_IMAGE_LOADING":
      return {
        ...state,
        chapter41: {
          data: state.chapter41.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER42_IMAGE":
      return {
        ...state,
        chapter42: {
          loading: state.chapter42.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER42_IMAGE_LOADING":
      return {
        ...state,
        chapter42: {
          data: state.chapter42.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER43_IMAGE":
      return {
        ...state,
        chapter43: {
          loading: state.chapter43.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER43_IMAGE_LOADING":
      return {
        ...state,
        chapter43: {
          data: state.chapter43.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER44_IMAGE":
      return {
        ...state,
        chapter44: {
          loading: state.chapter44.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER44_IMAGE_LOADING":
      return {
        ...state,
        chapter44: {
          data: state.chapter44.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER45_IMAGE":
      return {
        ...state,
        chapter45: {
          loading: state.chapter45.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER45_IMAGE_LOADING":
      return {
        ...state,
        chapter45: {
          data: state.chapter45.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER46_IMAGE":
      return {
        ...state,
        chapter46: {
          loading: state.chapter46.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER46_IMAGE_LOADING":
      return {
        ...state,
        chapter46: {
          data: state.chapter46.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER47_IMAGE":
      return {
        ...state,
        chapter47: {
          loading: state.chapter47.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER47_IMAGE_LOADING":
      return {
        ...state,
        chapter47: {
          data: state.chapter47.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER48_IMAGE":
      return {
        ...state,
        chapter48: {
          loading: state.chapter48.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER48_IMAGE_LOADING":
      return {
        ...state,
        chapter48: {
          data: state.chapter48.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER49_IMAGE":
      return {
        ...state,
        chapter49: {
          loading: state.chapter49.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER49_IMAGE_LOADING":
      return {
        ...state,
        chapter49: {
          data: state.chapter49.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER50_IMAGE":
      return {
        ...state,
        chapter50: {
          loading: state.chapter50.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER50_IMAGE_LOADING":
      return {
        ...state,
        chapter50: {
          data: state.chapter50.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER51_IMAGE":
      return {
        ...state,
        chapter51: {
          loading: state.chapter51.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER51_IMAGE_LOADING":
      return {
        ...state,
        chapter51: {
          data: state.chapter51.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER52_IMAGE":
      return {
        ...state,
        chapter52: {
          loading: state.chapter52.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER52_IMAGE_LOADING":
      return {
        ...state,
        chapter52: {
          data: state.chapter52.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER53_IMAGE":
      return {
        ...state,
        chapter53: {
          loading: state.chapter53.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER53_IMAGE_LOADING":
      return {
        ...state,
        chapter53: {
          data: state.chapter53.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER54_IMAGE":
      return {
        ...state,
        chapter54: {
          loading: state.chapter54.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER54_IMAGE_LOADING":
      return {
        ...state,
        chapter54: {
          data: state.chapter54.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER55_IMAGE":
      return {
        ...state,
        chapter55: {
          loading: state.chapter55.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER55_IMAGE_LOADING":
      return {
        ...state,
        chapter55: {
          data: state.chapter55.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER56_IMAGE":
      return {
        ...state,
        chapter56: {
          loading: state.chapter56.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER56_IMAGE_LOADING":
      return {
        ...state,
        chapter56: {
          data: state.chapter56.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER57_IMAGE":
      return {
        ...state,
        chapter57: {
          loading: state.chapter57.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER57_IMAGE_LOADING":
      return {
        ...state,
        chapter57: {
          data: state.chapter57.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER58_IMAGE":
      return {
        ...state,
        chapter58: {
          loading: state.chapter58.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER58_IMAGE_LOADING":
      return {
        ...state,
        chapter58: {
          data: state.chapter58.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER59_IMAGE":
      return {
        ...state,
        chapter59: {
          loading: state.chapter59.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER59_IMAGE_LOADING":
      return {
        ...state,
        chapter59: {
          data: state.chapter59.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER60_IMAGE":
      return {
        ...state,
        chapter60: {
          loading: state.chapter60.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER60_IMAGE_LOADING":
      return {
        ...state,
        chapter60: {
          data: state.chapter60.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER61_IMAGE":
      return {
        ...state,
        chapter61: {
          loading: state.chapter61.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER61_IMAGE_LOADING":
      return {
        ...state,
        chapter61: {
          data: state.chapter61.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER62_IMAGE":
      return {
        ...state,
        chapter62: {
          loading: state.chapter62.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER62_IMAGE_LOADING":
      return {
        ...state,
        chapter62: {
          data: state.chapter62.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER63_IMAGE":
      return {
        ...state,
        chapter63: {
          loading: state.chapter63.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER63_IMAGE_LOADING":
      return {
        ...state,
        chapter63: {
          data: state.chapter63.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER64_IMAGE":
      return {
        ...state,
        chapter64: {
          loading: state.chapter64.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER64_IMAGE_LOADING":
      return {
        ...state,
        chapter64: {
          data: state.chapter64.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER65_IMAGE":
      return {
        ...state,
        chapter65: {
          loading: state.chapter65.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER65_IMAGE_LOADING":
      return {
        ...state,
        chapter65: {
          data: state.chapter65.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER66_IMAGE":
      return {
        ...state,
        chapter66: {
          loading: state.chapter66.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER66_IMAGE_LOADING":
      return {
        ...state,
        chapter66: {
          data: state.chapter66.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER67_IMAGE":
      return {
        ...state,
        chapter67: {
          loading: state.chapter67.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER67_IMAGE_LOADING":
      return {
        ...state,
        chapter67: {
          data: state.chapter67.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER68_IMAGE":
      return {
        ...state,
        chapter68: {
          loading: state.chapter68.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER68_IMAGE_LOADING":
      return {
        ...state,
        chapter68: {
          data: state.chapter68.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER69_IMAGE":
      return {
        ...state,
        chapter69: {
          loading: state.chapter69.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER69_IMAGE_LOADING":
      return {
        ...state,
        chapter69: {
          data: state.chapter69.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER70_IMAGE":
      return {
        ...state,
        chapter70: {
          loading: state.chapter70.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER70_IMAGE_LOADING":
      return {
        ...state,
        chapter70: {
          data: state.chapter70.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER71_IMAGE":
      return {
        ...state,
        chapter71: {
          loading: state.chapter71.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER71_IMAGE_LOADING":
      return {
        ...state,
        chapter71: {
          data: state.chapter71.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER72_IMAGE":
      return {
        ...state,
        chapter72: {
          loading: state.chapter72.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER72_IMAGE_LOADING":
      return {
        ...state,
        chapter72: {
          data: state.chapter72.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER73_IMAGE":
      return {
        ...state,
        chapter73: {
          loading: state.chapter73.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER73_IMAGE_LOADING":
      return {
        ...state,
        chapter73: {
          data: state.chapter73.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER74_IMAGE":
      return {
        ...state,
        chapter74: {
          loading: state.chapter74.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER74_IMAGE_LOADING":
      return {
        ...state,
        chapter74: {
          data: state.chapter74.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER75_IMAGE":
      return {
        ...state,
        chapter75: {
          loading: state.chapter75.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER75_IMAGE_LOADING":
      return {
        ...state,
        chapter75: {
          data: state.chapter75.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER76_IMAGE":
      return {
        ...state,
        chapter76: {
          loading: state.chapter76.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER76_IMAGE_LOADING":
      return {
        ...state,
        chapter76: {
          data: state.chapter76.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER77_IMAGE":
      return {
        ...state,
        chapter77: {
          loading: state.chapter77.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER77_IMAGE_LOADING":
      return {
        ...state,
        chapter77: {
          data: state.chapter77.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER78_IMAGE":
      return {
        ...state,
        chapter78: {
          loading: state.chapter78.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER78_IMAGE_LOADING":
      return {
        ...state,
        chapter78: {
          data: state.chapter78.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER79_IMAGE":
      return {
        ...state,
        chapter79: {
          loading: state.chapter79.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER79_IMAGE_LOADING":
      return {
        ...state,
        chapter79: {
          data: state.chapter79.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER80_IMAGE":
      return {
        ...state,
        chapter80: {
          loading: state.chapter80.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER80_IMAGE_LOADING":
      return {
        ...state,
        chapter80: {
          data: state.chapter80.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER81_IMAGE":
      return {
        ...state,
        chapter81: {
          loading: state.chapter81.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER81_IMAGE_LOADING":
      return {
        ...state,
        chapter81: {
          data: state.chapter81.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER82_IMAGE":
      return {
        ...state,
        chapter82: {
          loading: state.chapter82.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER82_IMAGE_LOADING":
      return {
        ...state,
        chapter82: {
          data: state.chapter82.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER83_IMAGE":
      return {
        ...state,
        chapter83: {
          loading: state.chapter83.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER83_IMAGE_LOADING":
      return {
        ...state,
        chapter83: {
          data: state.chapter83.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER84_IMAGE":
      return {
        ...state,
        chapter84: {
          loading: state.chapter84.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER84_IMAGE_LOADING":
      return {
        ...state,
        chapter84: {
          data: state.chapter84.data,
          loading: action.payload,
        },
      };
    case "SET_CHAPTER85_IMAGE":
      return {
        ...state,
        chapter85: {
          loading: state.chapter85.loading,
          data: action.payload,
        },
      };
    case "SET_CHAPTER85_IMAGE_LOADING":
      return {
        ...state,
        chapter85: {
          data: state.chapter85.data,
          loading: action.payload,
        },
      };
    case "RESET":
      return { ...state };
    default:
      return state;
  }
};

export default imageReducer;
