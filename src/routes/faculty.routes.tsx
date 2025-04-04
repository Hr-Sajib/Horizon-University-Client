import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";
import { TRoute } from "../types/sideBar.type";



export const facultyRoutes: TRoute[] = [
    {
      name: "Dashboard",
      path: "dashboard",
      element: <FacultyDashboard/>,
    },
    {
      name: "Offered Course",
      path: "offered-course",
      element: <OfferedCourse/>,
    },
  ];