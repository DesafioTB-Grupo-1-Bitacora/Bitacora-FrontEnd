import { Route, Switch } from "wouter";

import Layout from "./pages/Layout";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Map from "./pages/MapPage";
import Memory from "./pages/Memory";
import NewMemory from "./pages/NewMemoryPage2";
import Profile from "./pages/ProfilePage";
import Travels from "./pages/TravelsPage";
import Collection from "./pages/Collection";

import ErrorPage from "./pages/ErrorPage";

// for testing purposes only (remove later)
import Medias from "./pages/MediasPage";
import Fields from "./pages/FieldsPage";
import LandingPage1 from "./pages/LandingPage1";
import SuscriptionPage from "./pages/SuscriptionPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={LandingPage1} />
        <Route path="/landingpage1" component={LandingPage1} />
        <Route path="/profile" component={Profile} />
        <Route path="/newmemory" component={NewMemory} />
        <Route path="/memory" component={Memory} />
        <Route path="/memories" component={Collection} />

        {/* 		MISCUADERNOSFALtA */}
        {/* RECORDATORIOS */}
        <Route path="/suscription" component={SuscriptionPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route path="/travels" component={Travels} />
        <Route path="/map" component={Map} />

        <Route component={ErrorPage} />
      </Switch>
    </Layout>
  );
}
export default App;
