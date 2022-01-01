import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import Homepage from "./pages/Homepage";
import Lectures from "./pages/Lectures";
import Classes from "./pages/Classes";
import Videocall from "./pages/VideoCall/Videocall";
import AppStateProvider, { useAppState } from "./pages/VideoCall/state";
import { VideoProvider } from "./pages/VideoCall/components/VideoProvider";
import generateConnectionOptions from "./pages/VideoCall/utils/generateConnectionOptions/generateConnectionOptions";

const VideoApp = () => {
  const { setError, settings } = useAppState();
  const connectionOptions = generateConnectionOptions(settings);

  return (
    <VideoProvider options={connectionOptions} onError={setError}>
      {/*<ErrorDialog dismissError={() => setError(null)} error={error} />*/}
      <Videocall />
    </VideoProvider>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppStateProvider>
        <Switch>
          <Route exact path={"/videocall"} component={VideoApp} />
          <Route exact path={`/room/:URLRoomName`} component={VideoApp} />
          <Route
            exact
            path={`/room/:URLRoomName/:UserName`}
            component={VideoApp}
          />
          <Route exact path={"/lectures"} component={Lectures} />
          <Route exact path={"/dashboard"} component={Dashboard} />
          <Route exact path={"/"} component={Classes} />
          <Route exact path={"/details"} component={Details} />
        </Switch>
      </AppStateProvider>
    </Router>
  );
};

export default App;
