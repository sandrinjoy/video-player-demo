import React from "react";
import { RiFullscreenFill } from "react-icons/ri";

function FullScreenButton({
  isFullScreen = false,
  onFullScreenChange = (isFullScreen: boolean) => {},
}) {
  return (
    <div
      onClick={() => {
        onFullScreenChange(!isFullScreen);
      }}
      className="transition-all cursor-pointer"
    >
      <RiFullscreenFill className="text-2xl text-white" />
    </div>
  );
}

export default FullScreenButton;
