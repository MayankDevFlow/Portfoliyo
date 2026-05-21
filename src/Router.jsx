import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainOutlet from "./MainOutlet";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Resume from './Pages/Resume';

 let route = createBrowserRouter([{
    path:"/",
    element:<MainOutlet/>,
    children:[
        {index:true ,element: <HomePage/>},
        {path:"/about" ,element: <About/>},
        {path:"/projects" ,element: <Projects/>},
        {path:"/contact" ,element: <Contact/>},
        {path:"/resume" ,element: <Resume/>},
    ]
}])

export default route