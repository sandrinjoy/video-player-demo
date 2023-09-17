import Image from "next/image";
import {
  IoMdPlay,
  IoMdSettings,
  IoMdSkipForward,
  IoMdVolumeHigh,
} from "react-icons/io";
import { RiFullscreenFill } from "react-icons/ri";
import { BiSolidCaptions } from "react-icons/bi";
export default function Home() {
  return (
    <main className="bg-gradient-to-t from-neutral-200 via-neutral-300 to-neutral-300  flex min-h-screen flex-col items-center justify-center p-4 gap-4">
      <div>
        <h1 className="text-6xl font-bold text-center text-neutral-800">
          React Video
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full overflow-hidden">
        <div className=" overflow-hidden  p-2 aspect-video w-10/12 bg-white relative">
          <div className="absolute inset-0 top-auto h-1/3 transition-all bg-gradient-to-t from-black/40 via-black/20 to-black/0 flex flex-col gap-3 items-stretch justify-end px-2 pb-3">
            {/* bar */}
            <div className="h-[3px] w-full bg-gray-200/30">
              {/* current */}
              <div className="w-1/2 h-full bg-gray-200"></div>
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
