import MainParticipantInfo from "../MainParticipantInfo/MainParticipantInfo";
import ParticipantTracks from "../ParticipantTracks/ParticipantTracks";
import React from "react";
import useMainSpeaker from "../../hooks/useMainSpeaker";
import useSelectedParticipant from "../VideoProvider/useSelectedParticipant/useSelectedParticipant";
import useScreenShareParticipant from "../../hooks/useScreenShareParticipant";
import Transcript from "../Transcript/Transcript";

export default function MainParticipant() {
  const mainParticipant = useMainSpeaker();
  const [selectedParticipant] = useSelectedParticipant();
  const screenShareParticipant = useScreenShareParticipant();

  const videoPriority =
    mainParticipant === selectedParticipant ||
    mainParticipant === screenShareParticipant
      ? "high"
      : null;

  return (
    /* audio is disabled for this participant component because this participant's audio 
       is already being rendered in the <ParticipantStrip /> component.  */
    <MainParticipantInfo participant={mainParticipant}>
      <ParticipantTracks
        participant={mainParticipant}
        disableAudio
        enableScreenShare
        videoPriority={videoPriority}
        mainPariticipant={true}
      />
      <Transcript height={"100%"} />
    </MainParticipantInfo>
  );
}
