import React from "react";

const Scene79 = React.forwardRef((props, ref) => {
  const { onNextScene } = props;
  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center gap-4 h-full"
      style={{ opacity: 0 }}
    >
      <h1 className="text-center">
        ได้เวลาบอกลาโลกนี้แล้ว
        <br />
        มีบทเรียนอะไรอยากบอกทุกคนมั้ย
      </h1>
      <div className="flex flex-col items-center gap-4">
        <button
          className="text-xl border w-full px-6 text-gray-600 shadow-lg rounded-full py-3 bg-white"
          onClick={() => {
            onNextScene({
              message: "อย่าแตกสลายเพราะใครอีกเลย",
            });
          }}
        >
          อย่าแตกสลายเพราะใครอีกเลย
        </button>
        <button
          className="text-xl border w-full px-6 text-gray-600 shadow-lg rounded-full py-3 bg-white"
          onClick={() => {
            onNextScene({
              message: "เราเกิดมาเพื่อมีความสุข",
            });
          }}
        >
          เราเกิดมาเพื่อมีความสุข
        </button>
        <button
          className="text-xl border w-full px-6 text-gray-600 shadow-lg rounded-full py-3 bg-white"
          onClick={() => {
            onNextScene({
              message: "อย่ารักใคร มากกว่าตัวเอง",
            });
          }}
        >
          อย่ารักใคร มากกว่าตัวเอง
        </button>
        <button
          className="text-xl border w-full px-6 text-gray-600 shadow-lg rounded-full py-3 bg-white"
          onClick={() => {
            onNextScene({
              message: "เป็นตัวเองในแบบที่ชอบ",
            });
          }}
        >
          เป็นตัวเองในแบบที่ชอบ
        </button>
        <button
          className="text-xl border w-full px-6 text-gray-600 shadow-lg rounded-full py-3 bg-white"
          onClick={() => {
            onNextScene({
              message: "การเติบโตมันยากเสมอ",
            });
          }}
        >
          การเติบโตมันยากเสมอ
        </button>
        <button
          className="text-xl border w-full px-6 text-gray-600 shadow-lg rounded-full py-3 bg-white"
          onClick={() => {
            onNextScene({
              message: "อย่ามัวแต่กอดอดีตไว้",
            });
          }}
        >
          อย่ามัวแต่กอดอดีตไว้
        </button>
        <button
          className="text-xl border w-full px-6 text-gray-600 shadow-lg rounded-full py-3 bg-white"
          onClick={() => {
            onNextScene({
              message: "โลกไม่ได้ใจร้าย ผู้คนต่างหากที่ใจร้าย",
            });
          }}
        >
          โลกไม่ได้ใจร้าย ผู้คนต่างหากที่ใจร้าย
        </button>
        <button
          className="text-xl border w-full px-6 text-gray-600 shadow-lg rounded-full py-3 bg-white"
          onClick={() => {
            onNextScene({
              message: "อย่าเสียเวลากับสิ่งที่ไม่ใช่",
            });
          }}
        >
          อย่าเสียเวลากับสิ่งที่ไม่ใช่
        </button>
      </div>
    </div>
  );
});

export default Scene79;
