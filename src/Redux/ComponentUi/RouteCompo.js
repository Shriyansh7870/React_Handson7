import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Student from "./Student";
import NewStudent from "./NewStudent";
import EditStudent from "./EditStudent";

const RouteCompo = () => {
  return (
    <>
      <BrowserRouter>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Student">Student</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/editStudent" element={<EditStudent />} />
          <Route path="/newStudent" element={<NewStudent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteCompo;
