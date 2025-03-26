import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { adminRoutes } from "./admin.routes";
import { routeGenerator } from "../utils/routeGenerator";
import { facultyRoutes } from "./faculty.routes";
import { studentRoutes } from "./student.routes";

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
        children: routeGenerator(adminRoutes)
    },

    // faculty app route 
    {
        path:"/faculty",
        element:<App/>,
        children: routeGenerator(facultyRoutes)
    },
    // student app route 
    {
        path:"/student",
        element:<App/>,
        children: routeGenerator(studentRoutes)
    },
    
])

export default router;