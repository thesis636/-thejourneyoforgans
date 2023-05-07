import React from "react";

const Scene81 = React.forwardRef((props, ref) => {
  const { getSelectMessage } = props;
  return (
    <p
      ref={ref}
      className="centered-paragraph text-black top-[34%]"
      style={{ opacity: 0 }}
    >
      {getSelectMessage === "อย่าแตกสลายเพราะใครอีกเลย" && (
        <React.Fragment>
          ไม่เป็นไรนะ
          <br />
          จับมือฉันไว้
        </React.Fragment>
      )}

      {getSelectMessage === "เราเกิดมาเพื่อมีความสุข" && (
        <React.Fragment>
          ไม่เป็นไรนะ
          <br />
          จับมือฉันไว้
        </React.Fragment>
      )}

      {getSelectMessage === "อย่ารักใคร มากกว่าตัวเอง" && (
        <React.Fragment>
          ไม่เป็นไรนะ
          <br />
          จับมือฉันไว้
        </React.Fragment>
      )}

      {getSelectMessage === "เป็นตัวเองในแบบที่ชอบ" && (
        <React.Fragment>
          ไม่เป็นไรนะ
          <br />
          จับมือฉันไว้
        </React.Fragment>
      )}

      {getSelectMessage === "การเติบโตมันยากเสมอ" && (
        <React.Fragment>
          ไม่เป็นไรนะ
          <br />
          จับมือฉันไว้
        </React.Fragment>
      )}

      {getSelectMessage === "อย่ามัวแต่กอดอดีตไว้" && (
        <React.Fragment>
          ไม่เป็นไรนะ
          <br />
          จับมือฉันไว้
        </React.Fragment>
      )}

      {getSelectMessage === "โลกไม่ได้ใจร้าย ผู้คนต่างหากที่ใจร้าย" && (
        <React.Fragment>
          ไม่เป็นไรนะ
          <br />
          จับมือฉันไว้
        </React.Fragment>
      )}

      {getSelectMessage === "อย่าเสียเวลากับสิ่งที่ไม่ใช่" && (
        <React.Fragment>
          ไม่เป็นไรนะ
          <br />
          จับมือฉันไว้
        </React.Fragment>
      )}
    </p>
  );
});

export default Scene81;
