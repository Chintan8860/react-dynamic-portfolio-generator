import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import LandingScreen from "./Screens/LandingSceen";
import MainTemplate from "./Screens/MainTemplate";
import Temp1 from "./Screens/Templates/Temp1/Temp1";
import Temp2 from "./Screens/Templates/Temp2/Temp2";
import ReactTemp1 from "./Screens/Templates/ReactTemp1/ReactTemp1";
const App = () => {
  const userLoginPortFolio = useSelector((state) => state.userLoginPortFolio);
  const { userInfo } = userLoginPortFolio;
  let urlElements = window.location.href.split("/");

  return (
    <BrowserRouter>
      {userInfo && urlElements[4] !== "temp1" && urlElements[4] !== "temp2" && (
        <Header />
      )}
      <Route exact path="/" component={LandingScreen} />
      <Route exact path="/login" component={LoginScreen} />
      <Route exact path="/templates" component={MainTemplate} />
      <Route exact path="/templates/temp1" component={Temp1} />
      <Route exact path="/templates/temp2" component={Temp2} />
      <Route exact path="/templates/react-temp1" component={ReactTemp1} />
      <Route
        exact
        path="/profile"
        component={() => <ProfileScreen userInfo={userInfo} />}
      />
    </BrowserRouter>
  );
};

export default App;
