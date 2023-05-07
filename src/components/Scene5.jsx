import React from "react";
import { Link } from "react-router-dom";

const Scene5 = React.forwardRef((props, ref) => {
  const { onNextScene,onClick } = props;
  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center h-full gap-4"
      style={{ opacity: 0 }}
    >
      <h1 className="text-center">
        วันนี้เป็นเช้าวันศุกร์
        <br />
        คุณต้องออกไปข้างนอก
        <br />
        คุณจะไปไหน?
      </h1>
      <Link
        className="bg-white w-64 py-3 text-2xl shadow rounded-lg text-center"
        // to={`/scene6-7`}
        onClick={() => {
          onClick()
          onNextScene({
            message: "ไปทำงาน",
          });
        }}
      >
        ไปทำงาน
      </Link>
      <Link
        className="bg-white w-64 py-3 text-2xl shadow rounded-lg text-center"
        // to={`/scene6-7`}
        onClick={() => {
          onClick()
          onNextScene({
            message: "ไปเรียน",
          });
        }}
      >
        ไปเรียน
      </Link>
      <Link
        className="bg-white w-64 py-3 text-2xl shadow rounded-lg text-center"
        // to={`/scene6-7`}
        onClick={() => {
          onClick()
          onNextScene({
            message: "ไปทำธุระ",
          });
        }}
      >
        ไปทำธุระ
      </Link>
    </div>
  );
});

export default Scene5;
