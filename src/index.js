import  React  from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Categories from './views/Categories/Categories';
import Food from './views/Food/Food';
import Feeback from './views/Feeback/Feeback';
import Meal from './views/Meal/Meal';
import Login from './views/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
    {
       path: "/categories",
       element: <Categories/>
    },
    {
        path: "/food",
        element: <Food/>
     },
     {
        path: "/feeback",
        element: <Feeback/>
     },
     {
        path: "/Meal",
        element: <Meal/>
     }, {
        path: "/login",
        element: <Login/>
     },

     {
        path: "/Footer",
        element: <Footer/>
     },
    {
        path: "*",
        element: "NOT"
    }

]);



root.render(<RouterProvider router={router}/>);
