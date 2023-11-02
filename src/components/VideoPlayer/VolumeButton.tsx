import React from "react";
import {
  IoMdVolumeHigh,
  IoMdVolumeLow,
  IoMdVolumeMute,
  IoMdVolumeOff,
} from "react-icons/io";

type VolumeButtonProps = {
  volume: 0;
  onVolumeChange: (volume: number) => void;
  isMuted: false;
  onMute: (mute: boolean) => void;
};

function VolumeButton({
  volume = 0,
  onVolumeChange = (volume) => {},
  isMuted = false,
  onMute = (mute) => {},
}: VolumeButtonProps) {
  return (
    <div className="transition-all cursor-pointer">
      {!isMuted && (
        <UnMutedButton
          volume={volume}
          onMute={onMute}
          onVolumeChange={onVolumeChange}
        />
      )}
      {isMuted && <MutedButton onMute={onMute} />}
    </div>
  );
}

export default VolumeButton;

function UnMutedButton({
  volume = 0,
  onMute = (mute: boolean) => {},
  onVolumeChange = (volume: number) => {},
}) {
  function handleVolumeChange(e: any) {
    e.stopPropagation();
    const volume = e.nativeEvent.offsetX / e.target.offsetWidth;
    onVolumeChange(volume);
  }
  return (
    <div className="group flex items-center">
      {!!volume && volume > 0.5 && (
        <IoMdVolumeHigh
          className="text-2xl text-white"
          onClick={() => {
            onMute(true);
          }}
        />
      )}
      {!!volume && volume <= 0.5 && (
        <IoMdVolumeLow
          className="text-2xl text-white"
          onClick={() => {
            onMute(true);
          }}
        />
      )}
      {!volume && (
        <IoMdVolumeMute
          className="text-2xl text-white"
          onClick={() => {
            onMute(false);
            handleVolumeChange(1);
          }}
        />
      )}
      <span className="transition-all opacity-0 w-0 group-hover:w-20 group-hover:opacity-100 text-white ">
        <div
          className="h-1 rounded-full w-auto bg-white/40"
          onClick={(e) => {
            handleVolumeChange(e);
          }}
        >
          <div
            className="h-1 rounded-full bg-white"
            style={{ width: `${volume * 100}%` }}
            onClick={(e) => {
              handleVolumeChange(e);
            }}
          ></div>
        </div>
      </span>
    </div>
  );
}

function MutedButton({ onMute = (mute: boolean) => {} }) {
  return (
    <IoMdVolumeOff
      className="text-2xl text-white"
      onClick={() => {
        onMute(false);
      }}
    />
  );
}
