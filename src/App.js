import React from "react";
import { Route, Switch } from "react-router-dom";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import "./App.css";
import AppBar from "components/AppBar/AppBar";
import HomeView from "views/HomeView";
import LoginView from "views/LoginView";
import RegisterView from "views/RegisterView";

function App() {
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
