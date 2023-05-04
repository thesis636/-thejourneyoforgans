import React from "react";

const Scene25 = React.forwardRef((props, ref) => {
  const { onNextScene } = props;
  return (
    <div
      ref={ref}
      className="flex flex-col gap-4 justify-center h-full items-center"
      style={{ opacity: 0 }}
    >
      <h1>แล้วพอใจกับชีวิตที่ผ่านมารึยัง?</h1>
      <div className="flex flex-col gap-4">
        <button
          className="bg-white w-72 border py-3 text-xl shadow rounded-lg text-center"
          onClick={() => {
            onNextScene({
              message: "พอใจแล้ว",
            });
          }}
        >
          พอใจแล้ว
        </button>
        <button
          className="bg-white w-72 border py-3 text-xl shadow rounded-lg text-center"
          onClick={() => {
            onNextScene({
              message: "ยังไม่พอใจ",
            });
          }}
        >
          ยังไม่พอใจ
        </button>
        <button
          className="bg-white w-72 border py-3 text-xl shadow rounded-lg text-center"
          onClick={() => {
            onNextScene({
              message: "เฉยๆนะ",
            });
          }}
        >
          เฉยๆนะ
        </button>
      </div>
    </div>
  );
});

export default Scene25;
