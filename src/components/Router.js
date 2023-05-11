import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './Auth';
import Icons from 'views/Icons';

const AppRouter = (props) => {
  return (
    <Router>
      {props.isLoggedIn && <Icons />}
      <Switch>
        {props.isLoggedIn ?  (
          <div
            style={{
              maxWidth: 890,
              width: '100%',
              margin: '0 auto',
              marginTop: 80,
              display: 'flex',
              background: 'yellow',
              justifyContent: 'center',
            }}
          >
            {/* <Route exact path="/">
              <Home userObj={props.userObj} />
            </Route>
            <Route path="/profile" exact>
              <Profile
                userObj={props.userObj}
                refreshUser={props.refreshUser}
              />
            </Route> */}
          </div>
        ) : (
          <>
            <Route path="/">
              <Auth />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
