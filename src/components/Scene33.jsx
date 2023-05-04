import * as React from "react";

const Scene33 = React.forwardRef((props, ref) => {
  const { onNextScene } = props;
  const [message, setMessage] = React.useState("");
  const [messageValidate, setMessageValidate] = React.useState(false);

  const animateAlertMessageEl = React.useRef(null);

  return (
    <div
      ref={ref}
      className="relative top-[12%] text-center"
      style={{ opacity: 0 }}
    >
      <div
        style={{
          position: "fixed",
          zIndex: 9999,
          inset: "16px",
          pointerEvents: "none",
        }}
      >
        {messageValidate && (
          <div
            className="go4109123758"
            style={{
              left: "0px",
              right: "0px",
              display: "flex",
              position: "absolute",
              transition: "all 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s",
              transform: "translateY(0px)",
              top: "0px",
              justifyContent: "center",
            }}
          >
            <div
              ref={animateAlertMessageEl}
              className="go2072408551"
              style={{
                animation:
                  "0.35s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 normal forwards running go3223188581",
              }}
            >
              <div className="go685806154">
                <div className="go1858758034"></div>
                <div className="go1579819456">
                  <div className="go2534082608"></div>
                </div>
              </div>
              <div role="status" aria-live="polite" className="go3958317564">
                กรุณากรอกข้อความคำตอบของคุณ
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="text-center text-2xl flex flex-col items-center">
        แต่ก่อนจะเริ่มเดินทางกัน
        <br />
        ช่วยตั้งชื่อใหม่ให้ฉันหน่อยนะ
        <input
          placeholder="พิมพ์คำตอบ"
          className="text-xl p-3 mt-4 shadow border resize-none rounded-lg"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        ></input>
      </div>

      <button
        className="text-xl mt-4"
        onClick={() => {
          if (message) {
            onNextScene({
              message: message,
            });
          } else {
            setMessageValidate(true);
            setTimeout(() => {
              animateAlertMessageEl.current.style.animation =
                "0.35s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 normal forwards running go502128938";

              setTimeout(() => {
                setMessageValidate(false);
              }, 1000);
            }, 4000);
          }
        }}
      >
        กดเพื่อไปต่อ &gt;&gt;
      </button>
    </div>
  );
});

export default Scene33;
