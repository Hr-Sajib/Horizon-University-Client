import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { adminRoutes } from "./admin.routes";

const router = createBrowserRouter([
    {
    // root app route 
        path:"/",
        element:<App/>
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
        children: adminRoutes
    },
    
])

export default router;