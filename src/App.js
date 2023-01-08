import './App.css';
import React from "react";
import {Routes ,Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import NavBar from './components/NavBar';

function App() {

  return (
    <div >
      <NavBar/>
        <Routes>
          <Route path="*" element= {<Home/>}/>
          <Route path="/about" element= {<About/>}/>
          <Route path="/service" element= {<Service/>}/>
          <Route path="/contact" element= {<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;
