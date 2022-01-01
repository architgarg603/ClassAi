import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Classes from "./pages/Classes";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import Homepage from "./pages/Homepage";
import Lectures from "./pages/Lectures";
import PrivateRoute from "./pages/VideoCall/components/PrivateRoute/PrivateRoute";
import config from "./pages/VideoCall/config";
import AppStateProvider, { useAppState } from "./pages/VideoCall/state";
import { VideoProvider } from "./pages/VideoCall/components/VideoProvider";
import generateConnectionOptions from "./pages/VideoCall/utils/generateConnectionOptions/generateConnectionOptions";

const basePath = config.appBasePath || "/videocall";

const VideoApp = () => {
  const { setError, settings } = useAppState();
  const connectionOptions = generateConnectionOptions(settings);

  return (
    <VideoProvider options={connectionOptions} onError={setError}>
      {/*<ErrorDialog dismissError={() => setError(null)} error={error} />*/}
      <App />
    </VideoProvider>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppStateProvider>
        <Switch>
          <Route exact path={basePath} component={VideoApp} />
          <Route
            exact
            path={`${basePath}room/:URLRoomName`}
            component={VideoApp}
          />
          <Route
            exact
            path={`${basePath}room/:URLRoomName/:UserName`}
            component={VideoApp}
          />
          <Redirect to={basePath} />
          <Homepage exact path={"/"} />
          <Dashboard exact path={"/dashboard"} />
          <Lectures exact path={"/lectures"} />
          <Classes exact path={"/classes"} />
          <Details exact path={"/details"} />
        </Switch>
      </AppStateProvider>
    </Router>
  );
};

export default App;
