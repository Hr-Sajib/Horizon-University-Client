import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";
import { TRoute } from "../types/sideBar.type";



export const studentRoutes: TRoute[] = [
    {
      name: "Dashboard",
      path: "dashboard",
      element: <StudentDashboard/>,
    },
    {
      name: "Offered Course",
      path: "offered-course",
      element: <OfferedCourse/>,
    },
  ]