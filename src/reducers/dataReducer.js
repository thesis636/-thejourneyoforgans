const initState = {
  user: {
    id: "",
    nickname: "",
    gender: "",
    age: "",
  },
  question1: {
    title: ["วันนี้เป็นเช้าวันศุกร์", "คุณต้องออกไปข้างนอก", "คุณจะไปไหน?"],
    answer: "",
  },
  question2: {
    title: ["วันนี้คุณจะเดินทาง", "ด้วยวิธีไหน?"],
    answer: "",
  },
  question3: {
    title: ["วันสุดท้ายของสัปดาห์แล้ว", "วันหยุดนี้คุณแพลนจะทำอะไรมั้ย?"],
    answer: "",
  },
  question4: {
    title: [
      "ว่าแต่...เธอมีเรื่องอะไรที่ยังเสียดาย",
      "ที่ยังไม่ได้ทำตอนมีชีวิตอยู่มั้ย?",
    ],
    answer: "",
  },
  question5: {
    title: ["แล้วพอใจกับชีวิตที่ผ่านมารึยัง?"],
    answer: "",
  },
  question6: {
    title: ["แต่ก่อนจะเริ่มเดินทางกัน", "ช่วยตั้งชื่อใหม่ให้ฉันหน่อยนะ"],
    answer: "",
  },
  question7: {
    title: ["ถ้ามีโอกาสเธออยากบอกอะไรกับ", "ญาติของเธอเพื่อปลอบใจพวกเขามั้ย?"],
    answer: "",
  },
  question8: {
    title: ["ได้เวลาบอกลาโลกนี้แล้ว", "มีบทเรียนอะไรอยากบอกทุกคนมั้ย"],
    answer: "",
  },
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_USER":
      console.log(action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.id,
          nickname: action.payload.nickname,
          gender: action.payload.gender,
          age: action.payload.age,
        },
      };
    case "SET_QUESTION1":
      console.log(action.payload);
      return {
        ...state,
        question1: {
          ...state.question1,
          answer: action.payload.answer,
        },
      };
    case "SET_QUESTION2":
      console.log(action.payload);
      return {
        ...state,
        question2: {
          ...state.question2,
          answer: action.payload.answer,
        },
      };
    case "SET_QUESTION3":
      console.log(action.payload);
      return {
        ...state,
        question3: {
          ...state.question3,
          answer: action.payload.answer,
        },
      };
    case "SET_QUESTION4":
      console.log(action.payload);
      return {
        ...state,
        question4: {
          ...state.question4,
          answer: action.payload.answer,
        },
      };
    case "SET_QUESTION5":
      console.log(action.payload);
      return {
        ...state,
        question5: {
          ...state.question5,
          answer: action.payload.answer,
        },
      };
    case "SET_QUESTION6":
      return {
        ...state,
        question6: {
          ...state.question6,
          answer: action.payload.answer,
        },
      };
    case "SET_QUESTION7":
      return {
        ...state,
        question7: {
          ...state.question7,
          answer: action.payload.answer,
        },
      };
    case "SET_QUESTION8":
      return {
        ...state,
        question8: {
          ...state.question8,
          answer: action.payload.answer,
        },
      };
    default:
      return state;
  }
};

export default dataReducer;
