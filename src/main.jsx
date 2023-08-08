import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Switch, Redirect } from "wouter";
import Styled from "./styles";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Provider from "./context/Provider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <Styled.Wrapper>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/" component={Home}/>
          <Redirect to="/login" />
        </Switch>
      </Styled.Wrapper>
    </Provider>
  </React.StrictMode>
)
