import * as React from "react";

const Scene10 = React.forwardRef((props, ref) => {
  const { onNextScene,onClick } = props;
  const [message, setMessage] = React.useState("");
  const [messageValidate, setMessageValidate] = React.useState(false);

  const buttonEl = React.useRef(null);
  const animateAlertMessageEl = React.useRef(null);

  React.useEffect(() => {
    setTimeout(() => {
      buttonEl.current.click();
    }, 8000);
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col h-full pt-60 items-center gap-4"
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
      <h1 className="text-center">
        วันสุดท้ายของสัปดาห์แล้ว
        <br />
        วันหยุดนี้คุณแพลนจะทำอะไรมั้ย?
      </h1>
      <textarea
        cols="25"
        rows="5"
        placeholder="พิมพ์คำตอบ"
        className="p-4 text-xl shadow resize-none rounded-2xl"
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      ></textarea>
      <button
        ref={buttonEl}
        className="text-2xl tracking-wide "
        onClick={() => {
          onClick()
          onNextScene({
            message: message,
          });
          // if (message) {
          //   onNextScene({
          //     message: message,
          //   });
          // } else {
          //   setMessageValidate(true);
          //   setTimeout(() => {
          //     animateAlertMessageEl.current.style.animation =
          //       "0.35s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 normal forwards running go502128938";

          //     setTimeout(() => {
          //       setMessageValidate(false);
          //     }, 1000);
          //   }, 4000);
          // }
        }}
      >
        กดเพื่อไปต่อ &gt;&gt;
      </button>
    </div>
  );
});

export default Scene10;
