import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AdminLayout from 'layouts/Admin/Admin.js';
import RTLLayout from 'layouts/RTL/RTL.js';
import 'assets/scss/black-dashboard-react.scss';
import 'assets/css/nucleo-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
// import firebase from 'firebase/compat/app';

createRoot(document.getElementById('root')).render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Switch>
              <Route
                path="/admin"
                render={(props) => <AdminLayout {...props} />}
              />
              <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
              <Redirect from="/" to="/admin/MainLogin" />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>
);