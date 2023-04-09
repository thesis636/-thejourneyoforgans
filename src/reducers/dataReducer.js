const initState = {
  chapter1: {
    messageBox1: [
      "ผลงานนี้เป็นส่วนหนึ่งของงานวิทยานิพนธ์",
      "จากนิสิตเอกการสื่อสารเพื่อสุขภาพ",
      "วิทยาลัยนวัตกรรมสื่อสารสังคม",
      "มหาวิทยาลัยศรีนครินทร์วิโรฒ",
    ],
    messageBox2: [
      "คำชี้แจง",
      "ผลงานชิ้นนี้เกิดขึ้นเพื่อให้ผู้เล่นทุกคนได้ตระหนัก",
      "ถึงชีวิตที่มีความไม่แน่นอน เรา",
      "อาจจะพบเจอกับความสูญเสียทั้งกับตัวเรา",
      "และคนรอบข้างเมื่อไหร่ก็ได้",
      "และอวัยวะของเราสามารถเป็นประโยชน์ต่อผู้ที่",
      "กำลังต้องการได้",
    ],
    messageBox3: [
      "โปรดตรวจสอบความมั่นคงทางจิตใจของ",
      "คุณก่อนเข้าเล่น เนื่องจากเว็บไซต์นี้มี",
      "เนื้อหาเกี่ยวกับความตายและการสูญเสีย",
    ],
    messageBox4: [
      "ขอขอบคุณทุกๆคนที่กดเข้ามาเล่นในเว็บไซต์",
      "หากพร้อมแล้ว ขอให้คุณค่อยๆปล่อย",
      "เวลานาทีนี้ให้ผ่านไปอย่างช้าๆ",
      "และมาติดตามเรื่องราวกัน :)",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "2",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "2",
          },
        },
      },
    ],
  },
  chapter2: {
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "3",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "3",
          },
        },
      },
    ],
  },
  chapter3: {
    data: {
      name: "",
      gender: "ชาย",
      age: "",
    },
    buttons: [
      {
        title: "แตะเพื่อไปต่อ>>",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "4",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "4",
          },
        },
      },
    ],
  },
  chapter4: {
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "5",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "5",
          },
        },
      },
    ],
  },
  chapter5: {
    data: {
      choice: "",
    },
    messageBox1: [
      "วันนี้เป็นเช้าวันศุกร์",
      "คุณต้องออกไปข้างนอก",
      "คุณจะออกไปไหน",
    ],
    buttons: [
      {
        title: "ไปทำงาน",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "6",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "6",
          },
          setDataChapter: {
            type: "SET_DATA_CHAPTER5",
            payload: "ไปทำงาน",
          },
        },
      },
      {
        title: "ไปโรงเรียน",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "6",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "6",
          },
          setDataChapter: {
            type: "SET_DATA_CHAPTER5",
            payload: "ไปโรงเรียน",
          },
        },
      },
      {
        title: "ไปทำธุระ",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "6",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "6",
          },
          setDataChapter: {
            type: "SET_DATA_CHAPTER5",
            payload: "ไปทำธุระ",
          },
        },
      },
    ],
  },
  chapter6: {
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "7",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "7",
          },
        },
      },
    ],
  },
  chapter7: {
    data: {
      choice: "",
    },
    messageBox1: ["วันนี้คุณจะเดินทาง", "ด้วยวิธีไหน?"],
    buttons: [
      {
        title: "รถไฟฟ้า",
        key: "bts",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "8-bts",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "8-bts",
          },
          setDataChapter: {
            type: "SET_DATA_CHAPTER7",
            payload: "รถไฟฟ้า",
          },
        },
      },
      {
        title: "เดินไป",
        key: "walk",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "8-walk",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "8-walk",
          },
          setDataChapter: {
            type: "SET_DATA_CHAPTER7",
            payload: "เดินไป",
          },
        },
      },
      {
        title: "วินมอเตอร์ไซค์",
        key: "motorcycle",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "8-motorcycle",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "8-motorcycle",
          },
          setDataChapter: {
            type: "SET_DATA_CHAPTER7",
            payload: "วินมอเตอร์ไซค์",
          },
        },
      },
    ],
  },
  chapter8: {
    bts: {
      buttons: [
        {
          title: "",
          onClick: {
            setBackground: {
              type: "SET_BACKGROUND",
              payload: "8-walk",
            },
            setMessage: {
              type: "SET_MESSAGE",
              payload: "8-walk",
            },
          },
        },
      ],
    },
    motorcycle: {
      buttons: [
        {
          title: "",
          onClick: {
            setBackground: {
              type: "SET_BACKGROUND",
              payload: "8-walk",
            },
            setMessage: {
              type: "SET_MESSAGE",
              payload: "8-walk",
            },
          },
        },
      ],
    },
    walk: {
      buttons: [
        {
          title: "",
          onClick: {
            setBackground: {
              type: "SET_BACKGROUND",
              payload: "9",
            },
            setMessage: {
              type: "SET_MESSAGE",
              payload: "9",
            },
          },
        },
      ],
    },
  },
  chapter9: {
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "10",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "10",
          },
        },
      },
    ],
  },
  chapter10: {
    data: {
      message: "",
    },
    messageBox1: ["วันสุดท้ายของสัปดาห์แล้ว", "วันหยุดนี้คุณแพลนจะทำอะไรมั้ย?"],
    buttons: [
      {
        title: "แตะเพื่อไปต่อ>>",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "11",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "11",
          },
          setDataChapter: {
            type: "SET_DATA_CHAPTER10",
          },
        },
      },
    ],
  },
  chapter11: {
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "12",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "12",
          },
        },
      },
    ],
  },
  chapter12: {
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "13",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "13",
          },
        },
      },
    ],
  },
  chapter13: {
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "14",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "14",
          },
        },
      },
    ],
  },
  chapter14: {
    messageBox1: ["คุณตายแล้ว…"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "15",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "15",
          },
        },
      },
    ],
  },
  chapter15: {
    messageBox1: [
      "จากนั้นคุณตื่นมา และ",
      "พบว่าตัวเองอยู่ในดินแดน",
      "ว่างเปล่า",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "16",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "16",
          },
        },
      },
    ],
  },
  chapter16: {
    messageBox1: ["สวัสดีเด็กใหม", "ที่นี่คือดินแดนว่างเปล่า"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "17",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "17",
          },
        },
      },
    ],
  },
  chapter17: {
    messageBox1: ["ใช่แล้ว...ที่นี่ว่างเปล่า"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "18",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "18",
          },
        },
      },
    ],
  },
  chapter18: {
    messageBox1: ["เพราะโลกหลังความตาย", "เราไม่สำมารถเอาอะไรมาได"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "19",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "19",
          },
        },
      },
    ],
  },
  chapter19: {
    messageBox1: ["แม้แต่ความทรงจําของ", "ทุกคนที่นี่ก็เช่นกัน"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "20",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "20",
          },
        },
      },
    ],
  },
  chapter20: {
    messageBox1: [
      "หลังจากตายครบ7วันแล้ว",
      "ความทรงจําของผู้ตาย",
      "ทุกคนจะหายไป",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "21",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "21",
          },
        },
      },
    ],
  },
  chapter21: {
    messageBox1: ["จําไม่ได้แม้แต่ชื่อของ", "ตัวเอง..."],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "22",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "22",
          },
        },
      },
    ],
  },
  chapter22: {
    messageBox1: [
      "ดังนั้น ก่อนที่เธอจะลืม",
      "ความทรงจําทุกอย่างในโลก",
      "ที่เธอจากมา",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "23",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "23",
          },
        },
      },
    ],
  },
  chapter23: {
    messageBox1: ["ฉันจะพาเธอไปทบทวน", "สิ่งดีๆที่เธอเคยทํากัน"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "24",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "24",
          },
        },
      },
    ],
  },
  chapter24: {
    data: {
      message: "",
    },
    messageBox1: [
      "ว่าแต่…เธอมีเรื่องอะไร",
      "ที่ยังเสียดาย ที่ยังไม่ได้ทํา",
      "ตอนมีชีวิตอยู่มั้ย?",
    ],
    buttons: [
      {
        title: "แตะเพื่อไปต่อ>>",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "25",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "25",
          },
          setDataChapter: {
            type: "SET_DATA_CHAPTER24",
          },
        },
      },
    ],
  },
  chapter25: {
    data: {
      choice: "",
    },
    messageBox1: ["แล้วพอใจกับชีวิตที่ผ่านมารึยัง?"],
    buttons: [
      {
        title: "พอใจแล้ว",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "26",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "26",
          },
          setDataChapter: {
            type: "SET_DATA_CHAPTER25",
            payload: "พอใจแล้ว",
          },
        },
      },
      {
        title: "ยังไม่พอใจ",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "26",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "26",
          },
          setDataChapter: {
            type: "SET_DATA_CHAPTER25",
            payload: "ยังไม่พอใจ",
          },
        },
      },
      {
        title: "เฉยๆนะ",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "26",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "26",
          },
          setDataChapter: {
            type: "SET_DATA_CHAPTER25",
            payload: "เฉยๆนะ",
          },
        },
      },
    ],
  },
  chapter26: {
    พอใจแล้ว: {
      messageBox1: ["ดีใจด้วยนะที่ได้ทํา", "ทุกอย่างที่ตัวเองอยากทํา"],
      buttons: [
        {
          title: "",
          onClick: {
            setBackground: {
              type: "SET_BACKGROUND",
              payload: "27",
            },
            setMessage: {
              type: "SET_MESSAGE",
              payload: "27",
            },
          },
        },
      ],
    },
    ยังไม่พอใจ: {
      messageBox1: ["ไม่เป็นไรนะ", "อย่าได้คิดเสียดายเลย"],
      buttons: [
        {
          title: "",
          onClick: {
            setBackground: {
              type: "SET_BACKGROUND",
              payload: "27",
            },
            setMessage: {
              type: "SET_MESSAGE",
              payload: "27",
            },
          },
        },
      ],
    },
    เฉยๆนะ: {
      messageBox1: ["ไม่เป็นไรนะ", "อย่าได้คิดเสียดายเลย"],
      buttons: [
        {
          title: "",
          onClick: {
            setBackground: {
              type: "SET_BACKGROUND",
              payload: "27",
            },
            setMessage: {
              type: "SET_MESSAGE",
              payload: "27",
            },
          },
        },
      ],
    },
  },
  chapter27: {
    messageBox1: [
      "ท้ายที่สุดแล้วเธอได้สร้าง",
      "สิ่งดีๆก่อนตาย เธอไม่ได้",
      "ตายอย่างเปล่าประโยชน์",
      "หรอกนะ",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "28",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "28",
          },
        },
      },
    ],
  },
  chapter28: {
    messageBox1: [
      "จําได้มั้ย? เธอเคยลง",
      "ทะเบียนบริจาคอวัยวะ",
      "ไว้ก่อน ตายนะ",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "29",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "29",
          },
        },
      },
    ],
  },
  chapter29: {
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "30",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "30",
          },
        },
      },
    ],
  },
  chapter30: {
    messageBox1: [
      "ฉันจะพาเธอไปดูขั้นตอน",
      "ต่างๆว่าอวัยวะของเธอ",
      "เดินทางไปที่ไหนบ้าง",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "31",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "31",
          },
        },
      },
    ],
  },
  chapter31: {
    messageBox1: [
      "เธอจะได้ไม่ต้องเป็นห่วงร่าง",
      "กายนี้และไปดูว่า ร่างกายเธอ",
      "สามารถช่วยชีวิตคนได้อีก",
      "หลายชีวิต",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "32",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "32",
          },
        },
      },
    ],
  },
  chapter32: {
    data: {
      message: "",
    },
    messageBox1: [
      "แต่ก่อนจะเริ่มเดินทางกัน",
      "ช่วยตั้งชื่อใหม่ให้ฉัน",
      "หน่อยนะ",
    ],
    buttons: [
      {
        title: "แตะเพื่อไปต่อ>>",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "33",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "33",
          },
          setDataChapter: {
            type: "SET_DATA_CHAPTER32",
          },
        },
      },
    ],
  },
  chapter33: {
    messageBox1: ["ได้เลย"],
    messageBox2: ["คนนี้"],
    messageBox3: ["จะพาเธอออกเดินทางเอง"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "34",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "34",
          },
        },
      },
    ],
  },
  chapter34: {
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "35",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "35",
          },
        },
      },
    ],
  },
  chapter35: {
    messageBox1: [
      "หลังจากเธอเสียชีวิตจะมีแพทย์",
      "อย่างน้อย 3 คน มาวินิจฉัยว่า",
      "เธอมีภาวะสมองตาย",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "36",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "36",
          },
        },
      },
    ],
  },
  chapter36: {
    messageBox1: [
      "ซึ่งก็คือ การที่ผู้ป่วยสูญเสีย",
      "การทํางานอย่างสิ้นเชิง",
      "และถาวร",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "37",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "37",
          },
        },
      },
    ],
  },
  chapter37: {
    messageBox1: ["โดยไม่สามารถรักษาหรือ", "เยียวยาผู้ป่วยให้ฟื้นได้อีก"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "38",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "38",
          },
        },
      },
    ],
  },
  chapter38: {
    messageBox1: [
      "มาจากการที่แกนสมองเสียหาย",
      "จากการบาดเจ็บที่ สมองอย่างรุนแรง",
      "หรือเส้นเลือดในสมองแตก",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "39",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "39",
          },
        },
      },
    ],
  },
  chapter39: {
    messageBox1: ["ซึ่งในทางการแพทย์ถือว่าเสีย", "ชีวิตแล้วนั่นเอง"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "40",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "40",
          },
        },
      },
    ],
  },
  chapter40: {
    messageBox1: [
      "จากนั้นแพทย์จะมาแจ้งให้ญาติ",
      "ของเธอทราบว่า เธอได้แสดง",
      "ความจํานงบริจาคอวัยวะไว้",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "41",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "41",
          },
        },
      },
    ],
  },
  chapter41: {
    messageBox1: ["และแพทย์ต้องให้ญาติของเธอ", "ลงนามยินยอมให้ บริจาคอวัยวะ"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "42",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "42",
          },
        },
      },
    ],
  },
  chapter42: {
    data: {
      message: "",
    },
    messageBox1: [
      "ถ้ามีโอกาส เธออยากบอก",
      "อะไรญาติของเธอ เพื่อ",
      "ปลอบใจพวกเขามั้ย?",
    ],
    buttons: [
      {
        title: "แตะเพื่อไปต่อ>>",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "43",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "43",
          },
          setDataChapter: {
            type: "SET_DATA_CHAPTER42",
          },
        },
      },
    ],
  },
  chapter43: {
    messageBox1: [
      "ฉันเข้าใจนะว่า เธอคงรู้สึกเจ็บปวด",
      "ไม่แพ้กัน ว่าใน ซักวันเธอจะลืม",
      "พวกเขาไป",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "44",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "44",
          },
        },
      },
    ],
  },
  chapter44: {
    messageBox1: [
      "แต่ไม่เป็นไรนะ ฉันเชื่อว่า",
      "พวกเขาจะใช้ชีวิตอย่างดี",
      "เพื่อให้เธอหมดห่วงพวกเขา",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "45",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "45",
          },
        },
      },
    ],
  },
  chapter45: {
    messageBox1: [
      "จากนั้นแพทย์จะตรวจร่างกาย",
      "ของเธอ ตัดต่อม นํ้าเหลือง",
      "และตรวจเลือด",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "46",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "46",
          },
        },
      },
    ],
  },
  chapter46: {
    messageBox1: ["เพื่อเตรียมความพร้อมในการ", "ปลูกถ่ายอวัยวะ"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "47",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "47",
          },
        },
      },
    ],
  },
  chapter47: {
    messageBox1: ["และอวัยวะของเธอจะถูกส่ง", "ต่อไปยังโรงพยาบาล ต่างๆ"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "48",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "48",
          },
        },
      },
    ],
  },
  chapter48: {
    messageBox1: ["ที่มีผู้ป่วยที่ต้องการอวัยวะ", "เพื่อเปลี่ยนถ่าย"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "49",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "49",
          },
        },
      },
    ],
  },
  chapter49: {
    messageBox1: ["การปลูกถ่ายอวัยวะต้อง", "แข่งกับเวลา"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "50",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "50",
          },
        },
      },
    ],
  },
  chapter50: {
    messageBox1: ["เพราะแต่ละอวัยวะมีระยะเวลา", "ในขาดเลือดที่ แตกต่างกัน"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "51",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "51",
          },
        },
      },
    ],
  },
  chapter51: {
    messageBox1: ["เอาล่ะ เราต้องไปสถานที่", "ต่อไปกันแล้ว"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "52",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "52",
          },
        },
      },
    ],
  },
  chapter52: {
    messageBox1: ["ซึ่งเป็นขั้นตอนที่จะเปลี่ยน", "ชีวิตของคนๆนึงไปเลย ล่ะ"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "53",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "53",
          },
        },
      },
    ],
  },
  chapter53: {
    messageBox1: ["รีบไปกันเถอะ"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "54",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "54",
          },
        },
      },
    ],
  },
  chapter54: {
    messageBox1: [
      "ขั้นตอนนี้แพทย์จะผ่าตัดปลูก",
      "ถ่ายอวัยวะของเธอ ให้กับ",
      "ผู้รอรับบริจาค",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "55",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "55",
          },
        },
      },
    ],
  },
  chapter55: {
    messageBox1: [
      "ซึ่ง 1 ร่างกายที่บริจาคอวัยวะ",
      "สามารถช่วยเหลือ คนอื่นได้อีก",
      "8 ชีวิตเลยนะ",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "56",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "56",
          },
        },
      },
    ],
  },
  chapter56: {
    messageBox1: ["และหลังจากนี้มันจะเปลี่ยนชีวิต", "ของคนๆนึงยังไง น่ะเหรอ?"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "57",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "57",
          },
        },
      },
    ],
  },
  chapter57: {
    messageBox1: ["ตามฉันมาดูนี่สิ"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "58",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "58",
          },
        },
      },
    ],
  },
  chapter58: {
    messageBox1: ["คุณตาคนนี้ได้รับไตทียังใช้", "งานได้ดีของเธอ"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "59",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "59",
          },
        },
      },
    ],
  },
  chapter59: {
    messageBox1: ["ทําให้เขาสามารถกลับมาใช้", "ชีวิตต่อได้"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "60",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "60",
          },
        },
      },
    ],
  },
  chapter60: {
    messageBox1: ["ดูนั่นสิ"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "61",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "61",
          },
        },
      },
    ],
  },
  chapter61: {
    messageBox1: ["ดูนั่นสิ"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "62",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "62",
          },
        },
      },
    ],
  },
  chapter62: {
    messageBox1: ["คุณตาได้อยู่เลี้ยงหลาน", "ทั้งคู่ดูมีความสุขมากนะ"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "63",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "63",
          },
        },
      },
    ],
  },
  chapter63: {
    messageBox1: ["เห็นมั้ย?"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "64",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "64",
          },
        },
      },
    ],
  },
  chapter64: {
    messageBox1: ["1 อวัยวะของเธอไม่ได้ช่วย", "ได้แค่คุณตา"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "65",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "65",
          },
        },
      },
    ],
  },
  chapter65: {
    messageBox1: ["แต่ยังได้ช่วยครอบครัวของ", "คุณตาด้วย"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "66",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "66",
          },
        },
      },
    ],
  },
  chapter66: {
    messageBox1: [
      "ยังไม่หมดหรอกนะ",
      "สิ่งที่เธอได้ช่วยเหลือเพื่อน",
      "มนุษย์คนอื่นๆน่ะ",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "67",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "67",
          },
        },
      },
    ],
  },
  chapter67: {
    messageBox1: ["ตามฉันมาดูนี่สิ"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "68",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "68",
          },
        },
      },
    ],
  },
  chapter68: {
    messageBox1: ["เธอเห็นเด็กผู้ชายที่ใส่ชุด", "ตัวสํารองตรงนั้นมั้ย ?"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "69",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "69",
          },
        },
      },
    ],
  },
  chapter69: {
    messageBox1: ["เด็กคนนั้นฝันอยากเป็นนัก", "กีฬาฟุตบอลล่ะ"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "70",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "70",
          },
        },
      },
    ],
  },
  chapter70: {
    messageBox1: ["แต่เขาไม่สามารถเป็นได้"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "71",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "71",
          },
        },
      },
    ],
  },
  chapter71: {
    messageBox1: ["เพราะหัวใจของเด็กผู้ชายคน", "นั้นไม่แข็งแรงน่ะ"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "72",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "72",
          },
        },
      },
    ],
  },
  chapter72: {
    messageBox1: ["เลยไม่สามารถเล่นกีฬา", "หนักๆได้"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "73",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "73",
          },
        },
      },
    ],
  },
  chapter73: {
    messageBox1: ["แต่เธอคือคนที่ทําให้เขามี", "โอกาสทําตามฝัน"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "74",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "74",
          },
        },
      },
    ],
  },
  chapter74: {
    messageBox1: ["เพราะหัวใจที่ยังแข็งแรง", "ของเธอ"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "75",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "75",
          },
        },
      },
    ],
  },
  chapter75: {
    messageBox1: ["วันนี้เด็กผู้ชายคนนั้นได้เริ่ม", "ทําตามความฝันแล้วนะ"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "76",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "76",
          },
        },
      },
    ],
  },
  chapter76: {
    messageBox1: [
      "ร่างกายของเธอสามารถ",
      "สานฝันและต่อชีวิตให้ผู้คน",
      "อีกมากเลยล่ะ",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "77",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "77",
          },
        },
      },
    ],
  },
  chapter77: {
    messageBox1: ["นี่เป็นเพียงแค่ผู้คนส่วนหนึ่ง", "ที่ฉันพาเธอมาดู เท่านั้น"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "78",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "78",
          },
        },
      },
    ],
  },
  chapter78: {
    messageBox1: ["เอาล่ะ ได้เวลาที่พวกเราต้อง ", "กลับไปดินแดนว่าง เปล่าแล้ว"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "79",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "79",
          },
        },
      },
    ],
  },
  chapter78: {
    messageBox1: ["เอาล่ะ ได้เวลาที่พวกเราต้อง ", "กลับไปดินแดนว่าง เปล่าแล้ว"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "79",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "79",
          },
        },
      },
    ],
  },
  chapter79: {
    data: {
      choice: "",
    },
    messageBox1: [
      "ได้เวลาบอกลาโลกนี้แล้ว",
      "มีบทเรียนอะไรอยาก",
      "บอกทุกคนมั้ย",
    ],
    buttons: [
      {
        title: "ชีวิตคนเรามันไม่ได้ง่าย มันท้าทายเสมอ",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "80",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "80",
          },
          setDataChapter: {
            type: "SET_DATA_CHAPTER79",
            payload: "ชีวิตคนเรามันไม่ได้ง่าย มันท้าทายเสมอ",
          },
        },
      },
      {
        title:
          "ความล้มเหลว ไม่ใช่สิ่งที่ตรงกันข้ามกับ ความสําเร็จ มันคือส่วนหนึ่งของความสําเร็จ",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "80",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "80",
          },
          setDataChapter: {
            type: "SET_DATA_CHAPTER79",
            payload:
              "ความล้มเหลว ไม่ใช่สิ่งที่ตรงกันข้ามกับ ความสําเร็จ มันคือส่วนหนึ่งของความสําเร็จ",
          },
        },
      },
      {
        title: "คนที่มีเหตุผลในการมีชีวิตอยู่ ย่อมทนได้กับทุกสิ่ง",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "80",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "80",
          },
          setDataChapter: {
            type: "SET_DATA_CHAPTER79",
            payload: "คนที่มีเหตุผลในการมีชีวิตอยู่ ย่อมทนได้กับทุกสิ่ง",
          },
        },
      },
    ],
  },
  chapter80: {
    messageBox1: ["พอถึงเวลาจริงๆ"],
    messageBox2: ["เริ่มรู้สึกกลัวมั้ย?"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "81",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "81",
          },
        },
      },
    ],
  },
  chapter81: {
    messageBox1: ["ไม่เป็นไร จับมือฉันไว้นะ"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "82",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "82",
          },
        },
      },
    ],
  },
  chapter82: {
    messageBox1: ["ใกล้ถึงเวลาที่ฉันต้องไปแล้ว"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "83",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "83",
          },
        },
      },
    ],
  },
  chapter83: {
    messageBox1: [
      "ก่อนจะจากกัน ฉันมีของ",
      "ที่ระลึกสําหรับการ",
      "เดินทางครั้งนี้ด้วยนะ",
    ],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "84",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "84",
          },
        },
      },
    ],
  },
  chapter84: {
    messageBox1: ["ขอบคุณที่ร่วมเดินทางไปกับเรา"],
    buttons: [
      {
        title: "",
        onClick: {
          setBackground: {
            type: "SET_BACKGROUND",
            payload: "85",
          },
          setMessage: {
            type: "SET_MESSAGE",
            payload: "85",
          },
        },
      },
    ],
  },
  chapter85: "",
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_DATA_CHAPTER1":
      return { ...state, chapter1: action.payload };
    case "SET_DATA_CHAPTER2":
      return { ...state, chapter2: action.payload };
    case "SET_DATA_CHAPTER3":
      return { ...state, chapter3: action.payload };
    case "SET_DATA_CHAPTER4":
      return { ...state, chapter4: action.payload };
    case "SET_DATA_CHAPTER5":
      return { ...state, chapter5: action.payload };
    case "SET_DATA_CHAPTER6":
      return { ...state, chapter6: action.payload };
    case "SET_DATA_CHAPTER7":
      return { ...state, chapter7: action.payload };
    case "SET_DATA_CHAPTER8":
      return { ...state, chapter8: action.payload };
    case "SET_DATA_CHAPTER9":
      return { ...state, chapter9: action.payload };
    case "SET_DATA_CHAPTER10":
      return { ...state, chapter10: action.payload };
    case "SET_DATA_CHAPTER11":
      return { ...state, chapter11: action.payload };
    case "SET_DATA_CHAPTER12":
      return { ...state, chapter12: action.payload };
    case "SET_DATA_CHAPTER13":
      return { ...state, chapter13: action.payload };
    case "SET_DATA_CHAPTER14":
      return { ...state, chapter14: action.payload };
    case "SET_DATA_CHAPTER15":
      return { ...state, chapter15: action.payload };
    case "SET_DATA_CHAPTER16":
      return { ...state, chapter16: action.payload };
    case "SET_DATA_CHAPTER17":
      return { ...state, chapter17: action.payload };
    case "SET_DATA_CHAPTER18":
      return { ...state, chapter18: action.payload };
    case "SET_DATA_CHAPTER19":
      return { ...state, chapter19: action.payload };
    case "SET_DATA_CHAPTER20":
      return { ...state, chapter20: action.payload };
    case "SET_DATA_CHAPTER21":
      return { ...state, chapter21: action.payload };
    case "SET_DATA_CHAPTER22":
      return { ...state, chapter22: action.payload };
    case "SET_DATA_CHAPTER23":
      return { ...state, chapter23: action.payload };
    case "SET_DATA_CHAPTER24":
      return { ...state, chapter24: action.payload };
    case "SET_DATA_CHAPTER25":
      return { ...state, chapter25: action.payload };
    case "SET_DATA_CHAPTER26":
      return { ...state, chapter26: action.payload };
    case "SET_DATA_CHAPTER27":
      return { ...state, chapter27: action.payload };
    case "SET_DATA_CHAPTER28":
      return { ...state, chapter28: action.payload };
    case "SET_DATA_CHAPTER29":
      return { ...state, chapter29: action.payload };
    case "SET_DATA_CHAPTER30":
      return { ...state, chapter30: action.payload };
    case "SET_DATA_CHAPTER31":
      return { ...state, chapter31: action.payload };
    case "SET_DATA_CHAPTER32":
      return { ...state, chapter32: action.payload };
    case "SET_DATA_CHAPTER33":
      return { ...state, chapter33: action.payload };
    case "SET_DATA_CHAPTER34":
      return { ...state, chapter34: action.payload };
    case "SET_DATA_CHAPTER35":
      return { ...state, chapter35: action.payload };
    case "SET_DATA_CHAPTER36":
      return { ...state, chapter36: action.payload };
    case "SET_DATA_CHAPTER37":
      return { ...state, chapter37: action.payload };
    case "SET_DATA_CHAPTER38":
      return { ...state, chapter38: action.payload };
    case "SET_DATA_CHAPTER39":
      return { ...state, chapter39: action.payload };
    case "SET_DATA_CHAPTER40":
      return { ...state, chapter40: action.payload };
    case "SET_DATA_CHAPTER41":
      return { ...state, chapter41: action.payload };
    case "SET_DATA_CHAPTER42":
      return { ...state, chapter42: action.payload };
    case "SET_DATA_CHAPTER43":
      return { ...state, chapter43: action.payload };
    case "SET_DATA_CHAPTER44":
      return { ...state, chapter44: action.payload };
    case "SET_DATA_CHAPTER45":
      return { ...state, chapter45: action.payload };
    case "SET_DATA_CHAPTER46":
      return { ...state, chapter46: action.payload };
    case "SET_DATA_CHAPTER47":
      return { ...state, chapter47: action.payload };
    case "SET_DATA_CHAPTER48":
      return { ...state, chapter48: action.payload };
    case "SET_DATA_CHAPTER49":
      return { ...state, chapter49: action.payload };
    case "SET_DATA_CHAPTER50":
      return { ...state, chapter50: action.payload };
    case "SET_DATA_CHAPTER51":
      return { ...state, chapter51: action.payload };
    case "SET_DATA_CHAPTER52":
      return { ...state, chapter52: action.payload };
    case "SET_DATA_CHAPTER53":
      return { ...state, chapter53: action.payload };
    case "SET_DATA_CHAPTER54":
      return { ...state, chapter54: action.payload };
    case "SET_DATA_CHAPTER55":
      return { ...state, chapter55: action.payload };
    case "SET_DATA_CHAPTER56":
      return { ...state, chapter56: action.payload };
    case "SET_DATA_CHAPTER57":
      return { ...state, chapter57: action.payload };
    case "SET_DATA_CHAPTER58":
      return { ...state, chapter58: action.payload };
    case "SET_DATA_CHAPTER59":
      return { ...state, chapter59: action.payload };
    case "SET_DATA_CHAPTER60":
      return { ...state, chapter60: action.payload };
    case "SET_DATA_CHAPTER61":
      return { ...state, chapter61: action.payload };
    case "SET_DATA_CHAPTER62":
      return { ...state, chapter62: action.payload };
    case "SET_DATA_CHAPTER63":
      return { ...state, chapter63: action.payload };
    case "SET_DATA_CHAPTER64":
      return { ...state, chapter64: action.payload };
    case "SET_DATA_CHAPTER65":
      return { ...state, chapter65: action.payload };
    case "SET_DATA_CHAPTER66":
      return { ...state, chapter66: action.payload };
    case "SET_DATA_CHAPTER67":
      return { ...state, chapter67: action.payload };
    case "SET_DATA_CHAPTER68":
      return { ...state, chapter68: action.payload };
    case "SET_DATA_CHAPTER69":
      return { ...state, chapter69: action.payload };
    case "SET_DATA_CHAPTER70":
      return { ...state, chapter70: action.payload };
    case "SET_DATA_CHAPTER71":
      return { ...state, chapter71: action.payload };
    case "SET_DATA_CHAPTER72":
      return { ...state, chapter72: action.payload };
    case "SET_DATA_CHAPTER73":
      return { ...state, chapter73: action.payload };
    case "SET_DATA_CHAPTER74":
      return { ...state, chapter74: action.payload };
    case "SET_DATA_CHAPTER75":
      return { ...state, chapter75: action.payload };
    case "SET_DATA_CHAPTER76":
      return { ...state, chapter76: action.payload };
    case "SET_DATA_CHAPTER77":
      return { ...state, chapter77: action.payload };
    case "SET_DATA_CHAPTER78":
      return { ...state, chapter78: action.payload };
    case "SET_DATA_CHAPTER79":
      return { ...state, chapter79: action.payload };
    case "SET_DATA_CHAPTER80":
      return { ...state, chapter80: action.payload };
    case "SET_DATA_CHAPTER81":
      return { ...state, chapter81: action.payload };
    case "SET_DATA_CHAPTER82":
      return { ...state, chapter82: action.payload };
    case "SET_DATA_CHAPTER83":
      return { ...state, chapter83: action.payload };
    case "SET_DATA_CHAPTER84":
      return { ...state, chapter84: action.payload };
    case "SET_DATA_CHAPTER85":
      return { ...state, chapter85: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
