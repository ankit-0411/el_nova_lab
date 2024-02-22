// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import CustomerList from "./CustomerList";

function App() {
  return (
    <>
      <Router>
        <div style={{ display: "flex" }}>
          <Sidebar style={{ width: "220px", outerHeight: "100%" }} />
          <div>
            <Routes>
              <Route path="/customers" element={<CustomerList />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
