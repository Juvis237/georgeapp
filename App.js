import React from "react";
import {BrowserRouter} from 'react-router-dom';
import { Routes, Route, Outlet} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Footer from './footer';
import Sliderwrap from './sliderWrap';
import Why from './whyus';
import Aboutus from './aboutus';
import Services from './service';
import Navbar from './Nav';
import ServicePage from "./servicePage";
import Description from "./serviceDescription";
import './style.css';
import './default.css';
import './lineicons.css';



function App(){
    return (

      <BrowserRouter>  
      <Routes>
      
      <Route path='/serviceDescription/:id'  render={(props) => <Description  headerText="ghjk"/>} />
    
      <Route path='/' element={<Navbar />} />
      <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/service' element={<Services />} />
        <Route path='/sliderWrap' element={<Sliderwrap />} />
        <Route path='/whyus' element={<Why />} />
   
      </Routes>
      </BrowserRouter> 
    );
    


     



}

export default App;
