import React from "react";
import Lottie from "lottie-react";
import Loadinganimi from "../assets/Loadingcube.json";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent">
      <Lottie
        animationData={Loadinganimi}
        loop={true}
        className="w-full h-full"
      />
    </div>
  );
};

export default Loading;
