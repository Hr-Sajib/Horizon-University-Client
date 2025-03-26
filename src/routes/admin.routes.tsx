import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateStudent from "../pages/admin/CreateStudent";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateFaculty from "../pages/admin/CreateFaculty";
import { TRoute } from "../types/sideBar.type";


export const adminRoutes: TRoute[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard/>,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent/>,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty/>,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
    ],
  },
];


