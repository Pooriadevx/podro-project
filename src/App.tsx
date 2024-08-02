import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoginProvider from "./context/login";
import LoginContainer from "./layouts/login/login";
import LocationData from "./layouts/locationData/locationData";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <ToastContainer closeButton autoClose={3000} bodyClassName={"Toast"} />
      <Router>
        <Routes>
          <Route path="/location-data" element={<LocationData />} />
          <Route
            path="/"
            element={
              <LoginProvider>
                <LoginContainer />
              </LoginProvider>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
