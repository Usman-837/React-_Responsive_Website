import React from "react";
import "../node_modules/bootstrap/dist//css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Home from "./Home";
import Servises from "./Servises";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/servises" Component={Servises}/>
            <Route path="/about" Component={About}/>
            <Route path="/contact" Component={Contact}/> 
            <Route path="*" Component={Error}/>           
        </Routes>
        </>
    );
};

export default App;