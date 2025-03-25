import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contacts from "../pages/Contacts";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AdminDashboard from "../pages/admin/adminDashboard";
import About from "../pages/About";
import AdminLayout from "../components/layout/AdminLayout";

const router = createBrowserRouter([
    {
    // root app route 
        path:"/",
        element:<App/>,
        children:[
            {
                path:"contacts",
                element:<Contacts/>,
            },
            {
                path:"about",
                element:<About/>,
            },
        ]
    },
    {
        path:"login",
        element:<Login/>,
    },
    {
        path:"register",
        element:<Register/>,
    },



    // admin app route 
    {
        path:"/admin",
        element:<App/>,
        children:[
            {
                index: true,
                element:<AdminDashboard/>,
            },
        ]
    },
    
])

export default router;