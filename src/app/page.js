"use client";
import {
  IoMdPause,
  IoMdPlay,
  IoMdSettings,
  IoMdSkipForward,
  IoMdVolumeHigh,
} from "react-icons/io";
import { RiFullscreenFill } from "react-icons/ri";
import { BiSolidCaptions } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { VideoPlayerActions } from "../enums";
import PlayOverlay from "../components/VideoPlayer/PlayOverlay";
import VolumeButton from "../components/VideoPlayer/VolumeButton";
export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const progressBarRef = useRef();
  const [diagnoseContent, setDiagnoseContent] = useState([]);
  function handleCurrentPosition(e) {
    const barElement = progressBarRef.current;
    const elementWidth = barElement.getBoundingClientRect().width;
    const elementLeft = barElement.getBoundingClientRect().left;
    const maxClientWidth = elementWidth - elementLeft;
    const clickPosition = e.clientX;
    const nextPosition = clickPosition - elementLeft;
    const position = Math.min(
      100,
      Math.max(0, (nextPosition / elementWidth) * 100)
    );
    const diagnose = [
      "element" + JSON.stringify(barElement.getBoundingClientRect()),
      `elementWidth: ${elementWidth}`,
      `elementLeft: ${elementLeft}`,
      `clickPosition: ${clickPosition}`,
      `position: ${position}`,

      `${JSON.stringify(e.target.getBoundingClientRect())}}`,
    ];
    setDiagnoseContent(diagnose);

    setPosition(position);
  }
  function handleCurrentHeadDrag(e) {
    handleCurrentPosition(e);
    // handleCurrentPosition(e);
  }
  function handleDragStart(e) {
    // e.dataTransfer.setDragImage(new Image(), 0, 0);
  }

  function handleDragEnd(e) {}

  return (
    <main className="bg-gradient-to-t from-neutral-900 via-neutral-800 to-neutral-900  flex min-h-screen flex-col items-center justify-center p-4 gap-4">
      <div>
        <h1 className="text-6xl font-bold text-center text-neutral-200">
          React Video
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full overflow-hidden">
        <div className=" overflow-hidden  p-2 aspect-video w-screen md:w-auto md:h-[70vh] bg-black relative text-white">
          {diagnoseContent.length > 0 && (
            <div className="absolute top-0 left-0 z-50 bg-white/50 p-2">
              {diagnoseContent.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}
          <PlayOverlay
            action="play"
            isPlaying={isPlaying}
            onPlay={(isPlaying) => {
              setIsPlaying(isPlaying);
            }}
          />
          <div className="absolute inset-0 top-auto h-1/3 transition-all bg-gradient-to-t from-black/40 via-black/20 to-black/0 flex flex-col gap-3 items-stretch justify-end px-2 pb-3">
            {/* bar */}
            <div
              className="h-[3px] hover:h-[5px] w-full bg-gray-200/30 group/progress-bar cursor-pointer transition-all "
              ref={progressBarRef}
              onMouseDown={handleCurrentPosition}
            >
              {/* current */}
              <div
                style={{ width: `${position}%` }}
                className="h-full bg-red-600 relative"
              >
                <span
                  className="
                    opacity-0
                  transition-all
                  group-hover/progress-bar:opacity-100 absolute  top-1/2 w-4 h-4 bg-red-600 rounded-full -translate-y-1/2 translate-x-1/2 right-0 cursor-pointer"
                ></span>
                <span
                  draggable
                  onDrag={handleCurrentHeadDrag}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                  className="absolute top-1/2 w-4 h-4   rounded-full -translate-y-1/2 translate-x-1/2 right-0 cursor-pointer"
                ></span>
              </div>
              {/* cursor */}
            </div>
            <div className="px-3 flex justify-between items-center drop-shadow-xl">
              {/* left */}
              <div className="flex gap-6 ">
                {!isPlaying ? (
                  <IoMdPlay
                    className="text-2xl text-white cursor-pointer"
                    onClick={() => {
                      setIsPlaying(true);
                    }}
                  />
                ) : (
                  <IoMdPause
                    className="text-2xl text-white cursor-pointer"
                    onClick={() => {
                      setIsPlaying(false);
                    }}
                  />
                )}
                <IoMdSkipForward className="text-2xl text-white" />
                <VolumeButton />
              </div>
              {/* right */}
              <div className="flex gap-6 ">
                <BiSolidCaptions className="text-2xl text-white" />
                <IoMdSettings className="text-2xl text-white" />
                <RiFullscreenFill className="text-2xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
