import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Switch, Redirect } from "wouter";
import Styled from "./styles";

import Login from "./pages/Login";
import Register from "./pages/Register";
import MapView from "./pages/MapView";
import Home from "./pages/Home";
import NewSheet from "./pages/NewSheet";
import Profile from "./pages/Profile";
import Travels from "./pages/Travels";

import Navbar from "./components/Nav/Navbar";

import Provider from "./context/Provider";
import { Reset } from 'styled-reset'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
    <Reset />
    <Navbar/>
      <Styled.Wrapper>
      
        <Switch>
          
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/newsheet" component={NewSheet}/>
          <Route path="/travels" component={Travels}/>
          <Route path="/map" component={MapView}/>
          
          <Route path="/" component={Home}/>

          <Redirect to="/login" />
        </Switch>
      </Styled.Wrapper>

    </Provider>
  </React.StrictMode>
)
