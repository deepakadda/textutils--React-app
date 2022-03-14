// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
// import { type } from "@testing-library/user-event/dist/type";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not?
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "INstall Now";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title="textutils" aboutText="aboutText" /> */}

      {/* jb props na pass karu*/}
      {/* <Navbar /> */}
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}

        {/* <Route exact path="/"> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the Text to Analyze"
          mode={mode}
        />
        {/* </Route>
          </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
