import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateStudent from "../pages/admin/CreateStudent";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateFaculty from "../pages/admin/CreateFaculty";
import { TRoute } from "../types/sideBar.type";
import AcademicSemesters from "../pages/admin/academicManagement/academicSemesters";
import CreateAcademicSemesters from "../pages/admin/academicManagement/CreateAcademicSemesters";
import AcademicDepartments from "../pages/admin/academicManagement/AcademicDepartments";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import AcademicFaculties from "../pages/admin/academicManagement/AcademicFaculties";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";


export const adminRoutes: TRoute[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard/>,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemesters/>,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemesters/>,
      },
      {
        name: "Create Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculties />,
      },
      {
        name: "Create Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartments />,
      },
    ]
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


