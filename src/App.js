import React, { lazy, Suspense, useEffect } from "react";
import { Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import AppBar from "components/AppBar/AppBar";
// import HomeView from "views/HomeView";
// import LoginView from "views/LoginView";
// import RegisterView from "views/RegisterView";
import "./App.css";
import { authOperations } from "redux/auth";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";

const HomeView = lazy(() => import("views/HomeView"));
const LoginView = lazy(() => import("views/LoginView"));
const RegisterView = lazy(() => import("views/RegisterView"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />
      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>
          <PublicRoute path="/register" restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" restricted>
            <LoginView />
          </PublicRoute>
          {/* <Route exact path="/" component={HomeView} /> */}
          {/* <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} /> */}
          <PrivateRoute path="/contacts">
            <div className="App">
              <h1 className="App-header">Phonebook</h1>
              <ContactForm />
              <h2 className="App-header">Contacts</h2>
              <Filter />
              <ContactList />
            </div>
          </PrivateRoute>
        </Suspense>
      </Switch>
    </>
  );
}

export default App;
