import "./App.css";
import AboutCom from "./componets/AboutCom";
import Alert from "./componets/Alert";
import Form from "./componets/Form";
import Navbar from "./componets/Navbar";
import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("You have Enabled dark mode", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("You have Enabled light mode", "Success");
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        About="this is about"
        Mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert}></Alert>
      <Form
        heading="Enter the text to Analyze Below"
        Mode={mode}
        showAlert={showAlert}
      ></Form>
      {/* <Routes> */}
      {/* exact is used here because of partial matching 
          if we do not use exact it shows the current componet which is 
          in use */}
      {/* <Route exact path="/about" element={<AboutCom />} />
          <Route */}
      {/* exact
            path="/"
            element={ */}

      {/* }
          /> */}
      {/* </Routes> */}
      {/* </Router> */}

      {/* ending */}
    </>
  );
}

export default App;
