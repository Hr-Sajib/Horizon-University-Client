import { ReactNode } from "react";

// Define the route type for adminRoutes
export interface TRoute {
    name: string;
    path?: string;
    element?: ReactNode; // Use JSX.Element for React components
    children?: TRoute[];
  }

  // Define the output type for newArray
export interface TNewRoute {
    path: string;
    element: ReactNode; // Use JSX.Element for React components
  }

  
// Define the sidebar item type
export type TSidebarItems = {
      key: string;
      label: ReactNode;
      children?: TSidebarItems[];
    };
  

    
// Define the output type for newArray
export interface NewRoute {
    path: string;
    Element: ReactNode; // Use JSX.Element for React components
  }
  