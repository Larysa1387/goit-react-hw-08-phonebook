import React, { lazy, Suspense, useEffect } from "react";
import { Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "redux/auth";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import AppBar from "components/AppBar/AppBar";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";
import Container from "components/Container";
import "./App.css";

const HomeView = lazy(() => import("views/HomeView"));
const LoginView = lazy(() => import("views/LoginView"));
const RegisterView = lazy(() => import("views/RegisterView"));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrUser = useSelector(authSelectors.getIsFetchingCurrUser);
  console.log("~ isFetchingCurrUser", isFetchingCurrUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFetchingCurrUser && (
      <Container>
        <AppBar />
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>
            <PublicRoute path="/" exact>
              <HomeView />
            </PublicRoute>
            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <div className="phoneBook-container">
                <h1 className="phoneBook-header">Phonebook</h1>
                <ContactForm />
                <h2 className="phoneBook-header">Contacts</h2>
                <Filter />
                <ContactList />
              </div>
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>
    )
  );
}

export default App;
