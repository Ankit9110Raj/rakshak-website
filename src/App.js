/*import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Planes from "./pages/Planes";

function App() {
  return (
    <>
    <Navbar/>
    <Planes/>
      <BrowserRouter>
        <Routes>
          <Route path="./pages/Planes"/>
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;*/

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Home from './pages';
import Planes from "./pages/Planes";
import Subsystem from './pages/subsystem';
import Competition from './pages/competition';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import Contact from './pages/contact';
import CarouselComponent from  './pages/index'

function App() {
  return (
    <Router>
      <Navbar />
      <CarouselComponent/>
       <Planes/>
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/Planes' component={Planes} />
        <Route path='/subsystem' component={Subsystem} />
        <Route path='/competition' component={Competition} />
        <Route path='/team' component={Teams} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/contact' component={Contact} />
        
      </Routes>
    </Router>
  );
}
  
export default App;
