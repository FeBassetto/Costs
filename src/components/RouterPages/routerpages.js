import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Company from "../pages/Company/company";
import Home from "../pages/Home/home";
import NewProject from "../pages/NewProject/project";
import Contact from "../pages/Contact/contact";
import Projects from "../pages/Projects/projects";
import NavBar from "../layout/NavBar/navbar";
import Container from "../layout/Container/container";
import Footer from "../layout/Footer/footer";

const RouterPages = () => {


    return (
        <Router>
            <NavBar />
            <Container customClass='min-height'>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/company' element={<Company />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/newproject' element={<NewProject />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    )
}

export default RouterPages