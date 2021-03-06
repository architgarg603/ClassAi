import React, { useState, useRef, useCallback, useEffect } from "react";
import MenuContainer from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreIcon from "@material-ui/icons/MoreVert";
import SettingsDialog from "../SettingsDialog/SettingsDialog";
import UserAvatar from "../UserAvatar/UserAvatar";

import { useAppState } from "../../../state";
import useVideoContext from "../../../hooks/useVideoContext";
import IconButton from "@material-ui/core/IconButton";
import config from "../../../config";
const { enableInAppCredentials } = config.symbl;

export default function Menu() {
  const { user, signOut } = useAppState();
  const { room, localTracks } = useVideoContext();
  // console.log('user', user);

  // const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const anchorRef = useRef(null);

  const handleSignOut = useCallback(() => {
    room && room.disconnect();
    localTracks.forEach((track) => track.stop());
    signOut && signOut();
  }, [room.disconnect, localTracks, signOut]);

  useEffect(() => {
    if (enableInAppCredentials) {
      const symblAppId = localStorage.getItem("symblAppId");
      const symblAppSecret = localStorage.getItem("symblAppSecret");
      if (!symblAppId || !symblAppSecret) {
        setSettingsOpen(true);
      }
    }
  });

  return (
    <div ref={anchorRef}>
      <IconButton
        color="inherit"
        onClick={() => setMenuOpen((state) => !state)}
      >
        {user ? <UserAvatar user={user} /> : <MoreIcon />}
      </IconButton>
      <MenuContainer
        open={menuOpen}
        onClose={() => setMenuOpen((state) => !state)}
        anchorEl={anchorRef.current}
      >
        {user && user.displayName && (
          <MenuItem disabled>{user.displayName}</MenuItem>
        )}
        {/*<MenuItem onClick={() => setAboutOpen(true)}>About</MenuItem>*/}
        <MenuItem onClick={() => setSettingsOpen(true)}>Settings</MenuItem>
        {user && <MenuItem onClick={handleSignOut}>Logout</MenuItem>}
      </MenuContainer>
      {/*<AboutDialog*/}
      {/*  open={aboutOpen}*/}
      {/*  onClose={() => {*/}
      {/*    setAboutOpen(false);*/}
      {/*    setMenuOpen(false);*/}
      {/*  }}*/}
      {/*/>*/}
      <SettingsDialog
        open={settingsOpen}
        onClose={() => {
          setSettingsOpen(false);
          setMenuOpen(false);
        }}
      />
    </div>
  );
}
