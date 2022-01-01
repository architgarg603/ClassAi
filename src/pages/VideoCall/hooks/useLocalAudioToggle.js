import { useCallback } from "react";
import useIsTrackEnabled from "./useIsTrackEnabled";
import useVideoContext from "./useVideoContext";

export default function useLocalAudioToggle() {
  const { localTracks } = useVideoContext();
  const audioTrack = localTracks.find((track) => track.kind === "audio");
  const isEnabled = useIsTrackEnabled(audioTrack);

  const toggleAudioEnabled = useCallback(() => {
    if (audioTrack) {
      audioTrack.isEnabled ? audioTrack.disable() : audioTrack.enable();
    }
  }, [audioTrack]);

  return [isEnabled, toggleAudioEnabled];
}
