import React from "react";
import { RotatingLines } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div className="absolute flex justify-center items-center h-[calc(100vh-100px)] inset-0">
      {/* {loader} */}
      <RotatingLines
        height="50"
        width="50"
        strokeColor="grey"
        strokeWidth="3"
        animationDuration="0.4"
        visible={true}
      />
    </div>
  );
};

export const Loader2 = ({ width }) => {
  return (
    <div className="">
      {/* {loader} */}
      <RotatingLines
        strokeColor="white"
        strokeWidth="3"
        animationDuration="0.4"
        width={width}
        visible={true}
      />
    </div>
  );
};
