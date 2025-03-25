import { ReactNode } from "react";

import CreateAdmin from "../pages/admin/CreateAdmin";

import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateFaculty from "../pages/admin/CreateFaculty";

// Define the route type for adminRoutes
interface Route {
  name: string;
  path?: string;
  element?: ReactNode; // Use JSX.Element for React components
  children?: Route[];
}

// Define the sidebar item type
type TSidebarItems = {
    key: string;
    label: ReactNode;
    children?: TSidebarItems[];
  };

// Define the output type for newArray
interface NewRoute {
  path: string;
  Element: ReactNode; // Use JSX.Element for React components
}

export const adminRoutes: Route[] = [
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

const newArray: NewRoute[] = adminRoutes.reduce((acc: NewRoute[], item: Route) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      Element: item.element, // Directly use the JSX element
    });
  }
  if (item.children) {
    item.children.forEach((child) => {
      if (child.path && child.element) {
        acc.push({
          path: child.path,
          Element: child.element, // Directly use the JSX element
        });
      }
    });
  }
  return acc;
}, []);




// Generate sidebar items for Ant Design Menu
export const adminSidebarItems: TSidebarItems[] = adminRoutes.reduce(
    (acc: TSidebarItems[], item: Route) => {
      if (item.path && item.name) {
        acc.push({
          key: item.name,
          label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
        });
      }
      if (item.children) {
        acc.push({
          key: item.name,
          label: item.name,
          children: item.children.map((child) => ({
            key: child.name,
            label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
          })),
        });
      }
      return acc;
    },
    []
  );

export default newArray;