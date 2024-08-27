import React from "react";

function Part({ path, index, zIndex }) {
  console.log("rendered");
  return (
    <img
      src={`character/${path}/${index + 1}.png`}
      alt=""
      width={250}
      style={{ zIndex, position: "absolute", left: 0, top: 0 }}
    />
  );
}

export default Part;
