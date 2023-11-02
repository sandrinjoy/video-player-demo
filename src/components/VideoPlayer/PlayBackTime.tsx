import React, { useMemo } from "react";

function formatTime(timeInSeconds: number) {
  let renderedTime = "";
  const hours = Math.floor(timeInSeconds / 3600);
  renderedTime += hours ? `${hours}:` : "";
  const minutes = Math.floor(timeInSeconds / 60) - hours * 60;
  renderedTime += `${minutes < 10 ? "0" : ""}${minutes}:`;
  const seconds = timeInSeconds - minutes * 60 - hours * 3600;
  renderedTime += `${seconds < 10 ? "0" : ""}${seconds}`.slice(0, 2);

  return renderedTime;
}

type Props = {
  currentTime: number;
  totalTime: number;
};

function PlayBackTime({ currentTime = 0, totalTime = 0 }: Props) {
  const formattedCurrentTime = formatTime(currentTime);
  const formattedTotalTime = useMemo(() => {
    return formatTime(totalTime);
  }, [totalTime]);
  return (
    <div>
      <span>{formattedCurrentTime}</span>
      {" / "}
      <span>{formattedTotalTime}</span>
    </div>
  );
}

export default PlayBackTime;
