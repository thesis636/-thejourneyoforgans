import React from "react";

const Scene26 = React.forwardRef((props, ref) => {
  const { getSelectMessage } = props;
  return (
    <p
      ref={ref}
      className="centered-paragraph whitespace-pre centered-paragraph top-1/2 -translate-y-1/2"
      style={{ opacity: 0 }}
    >
      {getSelectMessage === "พอใจแล้ว" && (
        <React.Fragment>
          ดีใจด้วยนะ
          <br />
          ที่ได้ทำทุกอย่างที่ตัวเองอยากทำ
        </React.Fragment>
      )}

      {getSelectMessage === "ยังไม่พอใจ" && (
        <React.Fragment>
          ไม่เป็นไรนะ
          <br />
          อย่าได้คิดเสียดายเลย
        </React.Fragment>
      )}

      {getSelectMessage === "เฉยๆนะ" && (
        <React.Fragment>
          ไม่เป็นไรนะ
          <br />
          อย่าได้คิดเสียดายเลย
        </React.Fragment>
      )}
    </p>
  );
});

export default Scene26;
