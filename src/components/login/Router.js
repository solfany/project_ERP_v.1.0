import React, { useState } from "react";
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Auth from "./Auth";
// import Home from "/project02/src/views/Home";
// import Profile from "./Profile";
// import Navigation from "../login/Navigation";
// import Admin from "layouts/Admin/Admin"
// import Icons from "views/Icons";
// import MainLogin from "views/MainLogin";
// import Home from "views/Home";
import Main from "views/Main";

const AppRouter = ({ isLoggedIn }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      {/* {isLoggedIn && <Navigation />} */}
      {isLoggedIn && <Main />}

      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Main />
            </Route>
            {/* <Route exact path="/Profile">
              <Profile />
            </Route> */}
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};
export default AppRouter;