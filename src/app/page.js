"use client";
import Image from "next/image";
import {
  IoMdPlay,
  IoMdSettings,
  IoMdSkipForward,
  IoMdVolumeHigh,
} from "react-icons/io";
import { RiFullscreenFill } from "react-icons/ri";
import { BiSolidCaptions } from "react-icons/bi";
import { useRef, useState } from "react";
export default function Home() {
  const [position, setPosition] = useState(0);
  const progressBarRef = useRef();
  const [diagnoseContent, setDiagnoseContent] = useState([]);
  function handleCurrentPosition(e) {
    const barElement = progressBarRef.current;
    const elementWidth = barElement.getBoundingClientRect().width;
    const elementLeft = barElement.getBoundingClientRect().left;
    const clickPosition = e.clientX;

    const position = Math.round(
      ((clickPosition - elementLeft) / elementWidth) * 100
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
    // handleCurrentPosition(e);
  }
  function handleDragStart(e) {}

  function handleDragEnd(e) {}
  return (
    <main className="bg-gradient-to-t from-neutral-200 via-neutral-300 to-neutral-300  flex min-h-screen flex-col items-center justify-center p-4 gap-4">
      <div>
        <h1 className="text-6xl font-bold text-center text-neutral-800">
          React Video
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full overflow-hidden">
        <div className=" overflow-hidden  p-2 aspect-video w-10/12 bg-white relative text-black">
          {diagnoseContent.length > 0 && (
            <div className="absolute top-0 left-0 z-50 bg-white/50 p-2">
              {diagnoseContent.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}

          <div className="absolute inset-0 top-auto h-1/3 transition-all bg-gradient-to-t from-black/40 via-black/20 to-black/0 flex flex-col gap-3 items-stretch justify-end px-2 pb-3">
            {/* bar */}
            <div
              className="h-[3px] w-full bg-gray-200/30 group/progress-bar cursor-pointer"
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
                  group-hover/progress-bar:opacity-100 absolute  top-1/2 w-3 h-3 bg-red-600 rounded-full -translate-y-1/2 translate-x-1/2 right-0 cursor-pointer"
                  draggable
                  onDrag={handleCurrentHeadDrag}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                ></span>
              </div>
              {/* cursor */}
            </div>
            <div className="px-3 flex justify-between items-center drop-shadow-xl">
              {/* left */}
              <div className="flex gap-6 ">
                <IoMdPlay className="text-2xl text-white" />
                <IoMdSkipForward className="text-2xl text-white" />
                <IoMdVolumeHigh className="text-2xl text-white" />
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
