import React from "react";
import Publication from "../Publication/Publication";
import usePublications from "../../hooks/usePublications";
import useVideoContext from "../../hooks/useVideoContext";

/*
 *  The object model for the Room object (found here: https://www.twilio.com/docs/video/migrating-1x-2x#object-model) shows
 *  that Participant objects have TrackPublications, and TrackPublication objects have Tracks.
 *
 *  The React components in this application follow the same pattern. This ParticipantTracks component renders Publications,
 *  and the Publication component renders Tracks.
 */

export default function ParticipantTracks({
  participant,
  disableAudio,
  enableScreenShare,
  videoPriority,
  mainParticipant,
}) {
  const { room } = useVideoContext();
  const publications = usePublications(participant);
  const isLocal = participant === room.localParticipant;

  let filteredPublications;

  if (
    enableScreenShare &&
    publications.some((p) => p.trackName.includes("screen"))
  ) {
    filteredPublications = publications.filter(
      (p) => !p.trackName.includes("camera")
    );
  } else {
    filteredPublications = publications.filter(
      (p) => !p.trackName.includes("screen")
    );
  }

  return (
    <>
      {filteredPublications.map((publication) => (
        <Publication
          key={publication.kind}
          publication={publication}
          participant={participant}
          isLocal={isLocal}
          disableAudio={disableAudio}
          videoPriority={videoPriority}
          mainParticipant={mainParticipant}
        />
      ))}
    </>
  );
}
