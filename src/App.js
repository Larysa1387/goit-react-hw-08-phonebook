import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import AppBar from "components/AppBar/AppBar";
import HomeView from "views/HomeView";
import LoginView from "views/LoginView";
import RegisterView from "views/RegisterView";
import "./App.css";
import { authOperations } from "redux/auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts">
          <div className="App">
            <h1 className="App-header">Phonebook</h1>
            <ContactForm />
            <h2 className="App-header">Contacts</h2>
            <Filter />
            <ContactList />
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
