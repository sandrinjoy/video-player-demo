import { cn } from "../../lib/utils";
import { IoMdPause, IoMdPlay } from "react-icons/io";

function PlayOverlay({
  isPlaying,
  onPlay = (isPlaying: boolean) => {},
}: {
  onPlay: Function;
  isPlaying: boolean;
}) {
  function handlePlayAction() {
    onPlay(!isPlaying);
  }

  return (
    <div
      className={cn(
        "absolute transition-all inset-0 flex items-center justify-center"
      )}
      // onDoubleClick={(e) => {
      //   handleAction(e, VideoPlayerActions.FULLSCREEN);
      // }}z
      onClick={() => {
        handlePlayAction();
      }}
    >
      {!isPlaying ? (
        <IoMdPlay className="text-8xl  aspect-square p-4 text-white/80 bg-white/20  rounded-full transition-play" />
      ) : (
        <IoMdPause className="text-8xl  aspect-square p-4 text-white/80 bg-white/20  rounded-full transition-play" />
      )}
    </div>
  );
}

export default PlayOverlay;
