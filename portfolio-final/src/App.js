import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import Project from "./components/Project";
import ContactPage from "./components/ContactPage";
import Footer from "./components/footer";
import { PROJECTS } from "./components/PROJECTS";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/contact" component={ContactPage} />
          <Route
            exact
            path="/project"
            component={() => {
              return <Project projects={PROJECTS} />;
            }}
          />
          <Route path="/home" component={HomePage} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </>
    );
  }
}
export default App;
