import * as React from "react";
import { Link } from "react-router-dom";

const Scene7 = React.forwardRef((props, ref) => {
  const { onNextScene } = props;
  return (
    <div
      ref={ref}
      className="pt-36 flex flex-col items-center h-full gap-4"
      style={{ opacity: 0 }}
    >
      <h1 className="text-center">
        วันนี้คุณจะเดินทาง
        <br />
        ด้วยวิธีไหน?
      </h1>
      <Link
        className="bg-white w-64 py-3 text-2xl shadow rounded-lg text-center"
        // href="/scene8-11?travelMethod=bts"
        onClick={() => {
          onNextScene({
            travelMethod: "bts",
            message: "ไปทำงาน",
          });
        }}
      >
        รถไฟฟ้า
      </Link>
      <Link
        className="bg-white w-64 py-3 text-2xl shadow rounded-lg text-center"
        onClick={() => {
          onNextScene({
            travelMethod: "motorcycle",
            message: "วินมอเตอร์ไซค์",
          });
        }}
      >
        วินมอเตอร์ไซค์
      </Link>
      <Link
        className="bg-white w-64 py-3 text-2xl shadow rounded-lg text-center"
        onClick={() => {
          onNextScene({
            travelMethod: "walk",
            message: "เดินไป",
          });
        }}
      >
        เดินไป
      </Link>
    </div>
  );
});

export default Scene7;
