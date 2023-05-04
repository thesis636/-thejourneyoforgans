import React from "react";

const Scene34 = React.forwardRef((props, ref) => {
  const {getMessage} = props;
  return (
    <p
      ref={ref}
      className="centered-paragraph top-[22%]"
      style={{ opacity: 0 }}
    >
      ได้เลย {`${getMessage}`}
      <br/>
      คนนี้จะพาเธอออกเดินทางเอง
    </p>
  );
});

export default Scene34;
