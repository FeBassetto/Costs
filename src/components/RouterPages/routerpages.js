import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Company from "../pages/Company/company";
import Home from "../pages/Home/home";
import NewProject from "../pages/NewProject/project";
import Contact from "../pages/Contact/contact";

const RouterPages = () => {


    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/company' element={<Company/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/newproject' element={<NewProject/>}/>
            </Routes>
        </Router>
    )
}

export default RouterPages